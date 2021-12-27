import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { ShippingAddress } from '../../components/indent_address';
import { Remark } from '../../components/indent_remark';
import { OrderDetails } from '../../components/indent_card';
import { IndentCommodity } from '../../components/indent_commodity';
import { IndentPlaceAnOrder } from '../../components/indent_placeAnOrder';
import { CartAbout } from '../../components/shoppingCart_about';
import { Get } from '../../global-data';
import './index.css';

const text = Get('languages').indent;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.data = new Array();
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const pid = 'indent';
    await Taro.eventCenter.once(`message:detail:${pid}`, (message) => {
      this.data = message;
    });
    Taro.eventCenter.trigger(`page:init:${pid}`);
    this.setState({});
  }

  filtrate() {
    let number = 0;
    for (let i of this.data) {
      if (i.select === true) {
        number += i.price * i.number;
      }
    }
    return number;
  }

  commodityNumber() {
    let number = 0;
    for (let i of this.data) {
      if (i.select === true) {
        number += 1;
      }
    }
    return number;
  }

  placeAnOrder() {
    console.log('ok');
  }

  render() {
    const element = this.data.map((e) => {
      if (e.select === true) {
        return (
          <IndentCommodity
            link={e.link}
            title={e.title}
            sku={e.specs}
            money={e.price}
            value={e.number}
          ></IndentCommodity>
        );
      }
    });
    return (
      <>
        <ShippingAddress></ShippingAddress>
        <OrderDetails
          element={element}
          postage={text.freeShipping}
          discount={text.noDiscount}
          price={this.filtrate()}
        ></OrderDetails>
        <Remark></Remark>
        <CartAbout />
        <IndentPlaceAnOrder
          number={this.commodityNumber()}
          price={this.filtrate()}
          event={this.placeAnOrder.bind(this)}
        ></IndentPlaceAnOrder>
      </>
    );
  }
}
