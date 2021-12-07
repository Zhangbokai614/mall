import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { CartTop } from '../../components/shoppingcart_top';
import { Card } from '../../components/shoppingcart_card/index';
import { Settlement } from '../../components/shoppingcart_settlement/index';
import { Get } from '../../global-data';
import * as cartApi from './service';
import './index.css';
import { CartAbout } from '../../components/shoppingcart_about';

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
        i.circle = false;
      } else {
        i.circle = true;
      }
    }
  }

  settlementNumber() {
    let number = 0;
    for (let i of this.cardData) {
      if (i.circle) {
        number += i.commodityPrice * i.value;
      }
    }
    return number;
  }

  cardDelete() {
    const array = this.cardData.filter((e) => e.circle === false);
    this.cardData = array;
    this.setState({ topText: false, bottomeCircle: false });
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
            e.circle === false ? (e.circle = true) : (e.circle = false);
            if (this.cardData.map((a) => a.circle).every(isBelowThreshold)) {
              this.setState({ bottomeCircle: true });
            } else {
              this.setState({ bottomeCircle: false });
            }
          }}
          showInfo={(data) => {
            e.value = data;
            this.setState({});
          }}
          link={e.link}
          title={e.title}
          config={e.config}
          number={e.commodityPrice}
          circle={e.circle}
          value={e.value}
        />
      );
    });
    return (
      <View>
        <CartTop clink={this.reverse.bind(this, 'topText')} textState={this.state.topText}></CartTop>
        {element}
        <Settlement
          number={this.settlementNumber()}
          topText={this.state.topText}
          circleClink={this.bottomeCircle.bind(this)}
          circleState={this.state.bottomeCircle}
          cardDelete={this.cardDelete.bind(this)}
        ></Settlement>
        <CartAbout />
      </View>
    );
  }
}
