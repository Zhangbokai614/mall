import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { Settlement } from '../../components/shoppingCart_settlement/index';
import { CartAbout } from '../../components/shoppingCart_about';
import { Cartnull } from '../../components/shoppingCart_null';
import { CartTop } from '../../components/shoppingCart_top';
import { Card } from '../../components/shoppingCart_card/index';
import { Get } from '../../global-data';
import * as dataApi from './service';
import './index.css';

const text = Get('languages').shoppingCart;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      topText: false,
      bottomeCircle: false,
    };
    this.cardData = new Array();
  }

  componentDidMount() {
    this.loading();
  }

  componentDidShow() {
    this.loading();
  }

  reverse(stateName) {
    this.setState({
      [stateName]: !this.state[stateName],
    });
  }

  bottomeCircle() {
    this.reverse('bottomeCircle');
    for (let i of this.cardData) {
      if (this.state.bottomeCircle) {
        i.select = false;
      } else {
        i.select = true;
      }
    }
  }

  settlementNumber() {
    let number = 0;
    for (let i of this.cardData) {
      if (i.select) {
        number += i.price * i.number;
      }
    }
    return number;
  }

  cardDelete() {
    const array = this.cardData.filter((e) => e.select === false);
    this.cardData = array;
    this.setState({ topText: false, bottomeCircle: false });
  }

  moneySymbol() {
    const isBelowThreshold = (currentValue) => currentValue === false;
    if (this.cardData.map((a) => a.select).every(isBelowThreshold)) {
      Taro.showToast({
        title: text.noSelect,
        icon: 'none',
      });
    } else {
      const pid = 'indent';
      Taro.navigateTo({
        url: '/pages/indent/index',
        success: () => {
          Taro.eventCenter.once(`page:init:${pid}`, () => {
            Taro.eventCenter.trigger(`message:detail:${pid}`, this.cardData);
          });
        },
      });
    }
  }

  async loading() {
    Taro.showLoading({
      title: text.loading,
    });
    const id = await dataApi.cart();
    const array = new Array();
    for (let i of id.data) {
      const data = await (await dataApi.goodsInfo(i.id)).data[0];
      array.push({
        id: data.id,
        select: false,
        number: i.number,
        inventory: data.inventory,
        link: data.images[0],
        price: data.price,
        specs: data.specs,
        title: data.title,
      });
    }
    this.cardData = array;
    Taro.hideLoading();
    this.setState({ loading: false, topText: false, bottomeCircle: false });
  }

  render() {
    console.log(this.cardData);
    const element = this.cardData.map((e) => {
      const isBelowThreshold = (currentValue) => currentValue === true;
      return (
        <Card
          key={String(e.id)}
          handleClick={() => {
            e.select === false ? (e.select = true) : (e.select = false);
            if (this.cardData.map((a) => a.select).every(isBelowThreshold)) {
              this.setState({ bottomeCircle: true });
            } else {
              this.setState({ bottomeCircle: false });
            }
          }}
          showInfo={(data) => {
            e.number = data;
            this.setState({});
          }}
          link={e.link}
          title={e.title}
          config={e.specs}
          number={e.price}
          circle={e.select}
          value={e.number}
          max={e.inventory}
          min={1}
        />
      );
    });

    const commodity = (
      <>
        <CartTop clink={this.reverse.bind(this, 'topText')} textState={this.state.topText}></CartTop>
        {element}
        <Settlement
          number={this.settlementNumber()}
          topText={this.state.topText}
          circleClink={this.bottomeCircle.bind(this)}
          circleState={this.state.bottomeCircle}
          cardDelete={this.cardDelete.bind(this)}
          moneySymbol={this.moneySymbol.bind(this)}
        ></Settlement>
        <CartAbout />
      </>
    );

    const commodityNull = (
      <>
        <Cartnull />
      </>
    );

    return <>{this.state.loading ? null : this.cardData.length == 0 ? commodityNull : commodity}</>;
  }
}
