import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { Get } from '../../global-data';
import './index.css';

const text = Get('languages').indent.card;

class OrderDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { element, price, postage, discount } = this.props;
    return (
      <View className='indent-card-levelOne'>
        {element}
        <View className='indext-card-levelone-one'>
          <View className='indext-card-levelone-one-chunk'>
            <Text className='indext-card-levelone-one-text-left'>{text.postage}</Text>
            <Text className='indext-card-levelone-one-text-right'>{postage}</Text>
          </View>
          <View className='indext-card-levelone-one-chunk'>
            <Text className='indext-card-levelone-one-text-left'>{text.StorePolicyAndPromotion}</Text>
            <Text className='indext-card-levelone-one-text-right'>{discount}</Text>
          </View>
          <View className='indext-card-levelone-one-chunk'>
            <Text className='indext-card-levelone-one-text-left'>{text.totalAmountOfTheOrder}</Text>
            <Text className='indext-card-levelone-one-text-right'>{text.cny + price}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export { OrderDetails };
