import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import image from '../../asset/images/tabs/cart_null.png';
import { Get } from '../../global-data/index';
import './index.css';

const text = Get('languages').shoppingCart.cartNull;

class Cartnull extends Component {
  constructor(props) {
    super(props);
  }

  jump() {
    Taro.switchTab({
      url: '/pages/home/index',
    });
  }

  render() {
    return (
      <View className='shoppingCart-null-levelOne'>
        <View className='shoppingCart-null-image-superior'>
          <Image src={image} mode='aspectFit' className='shoppingCart-null-image' />
        </View>
        <Text className='shoppingCart-null-textOne'>{text.shoppingcartisempty}</Text>
        <Text className='shoppingCart-null-textTwo'>{text.hurryupandbuysomebaby}</Text>
        <AtButton
          className='shoppingCart-null-button'
          type='secondary'
          size='normal'
          circle='true'
          onClick={this.jump.bind(this)}
        >
          {text.goshopping}
        </AtButton>
      </View>
    );
  }
}

export { Cartnull };
