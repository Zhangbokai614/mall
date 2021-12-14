import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { Settlement } from '../../components/shoppingCart_settlement/index';
import { CartAbout } from '../../components/shoppingCart_about';
import { Cartnull } from '../../components/shoppingCart_null';
import { CartTop } from '../../components/shoppingCart_top';
import { Card } from '../../components/shoppingCart_card/index';
import { Get } from '../../global-data';
import * as cartApi from './service';
import './index.css';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    Taro.navigateTo({
      url: '/pages/indent/index',
    });
  }

  async loading() {
    Taro.showLoading({
      title: Get('languages').loading,
    });
    const array = await cartApi.cart();
    this.cardData = array.data;
    this.setState({ topText: false, bottomeCircle: false });
    Taro.hideLoading();
  }

  render() {
    console.log(this.cardData);
    const element = this.cardData.map((e) => {
      const isBelowThreshold = (currentValue) => currentValue === true;
      return (
        <Card
          key={String(e)}
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
          max={e.maximum_inventory}
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

    return <>{this.cardData.length == 0 ? commodityNull : commodity}</>;
  }
}
