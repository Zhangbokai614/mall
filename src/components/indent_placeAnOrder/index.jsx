import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { Get } from '../../global-data';
import './index.css';

const text = Get('languages').indent.placeAnOrder;

class IndentPlaceAnOrder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { number, price, event } = this.props;
    return (
      <View className='indent-placeAnOrder-levelOne'>
        <Text className='indent-placeAnOrder-text-one'>{text.common + number + text.total}</Text>
        <Text className='indent-placeAnOrder-text-two'>{text.cny + price}</Text>
        <AtButton className='indent-placeAnOrder-button' type='primary' size='normal' circle='true' onClick={event}>
          {text.placeAnOrder}
        </AtButton>
      </View>
    );
  }
}

export { IndentPlaceAnOrder };
