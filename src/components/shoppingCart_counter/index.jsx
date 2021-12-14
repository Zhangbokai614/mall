import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { View, Input, Button } from '@tarojs/components';
import { Get } from '../../global-data';
import './index.css';

const text = Get('languages').shoppingCart.counter;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.number = parseInt(this.props.value);
    this.min = parseInt(this.props.min);
    this.max = parseInt(this.props.max);
  }

  addition() {
    if (this.number >= this.max) {
      Taro.showToast({
        title: text.much + ' ' + this.max + ' ' + text.piece,
        icon: 'none',
      });
    } else {
      this.number = this.number + 1;
      this.setState();
      this.childClickHandle();
    }
  }

  subtraction() {
    if (this.number <= this.min) {
      Taro.showToast({
        title: text.few,
        icon: 'none',
      });
    } else {
      this.number = this.number - 1;
      this.setState();
      this.childClickHandle();
    }
  }

  childClickHandle = () => {
    this.props.onChange(this.number);
  };

  render() {
    return (
      <View className='shoppingCart-counter-levelOne'>
        <Button onClick={this.subtraction.bind(this)} className='shoppingCart-counter-button'>
          {text.subtraction}
        </Button>
        <Input
          className='shoppingCart-counter-input'
          type='number'
          value={this.number}
          onInput={(e) => {
            var reg = /^[\d]+$/;
            if (!reg.test(e.detail.value)) {
              this.number = this.min;
              this.setState();
              this.childClickHandle();
            } else {
              if (e.detail.value > this.max) {
                this.number = this.max;
                this.setState();
                this.childClickHandle();
              }
              if (e.detail.value < this.min) {
                this.number = this.min;
                this.setState();
                this.childClickHandle();
              }
              if (parseInt(e.detail.value) <= this.max && parseInt(e.detail.value) >= this.min) {
                this.number = parseInt(e.detail.value);
                this.setState();
                this.childClickHandle();
              }
            }
          }}
        />
        <Button onClick={this.addition.bind(this)} className='shoppingCart-counter-button'>
          {text.addition}
        </Button>
      </View>
    );
  }
}

export { Counter };
