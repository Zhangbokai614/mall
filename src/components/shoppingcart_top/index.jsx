import { View, Text } from '@tarojs/components';
import React, { Component } from 'react';

import { Get } from '../../global-data';
import './index.css';

class CartTop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { textState, clink } = this.props;
    return (
      <View className='sticky'>
        <View className='cube'>
          <Text className='hint'>{Get('languages').shoppingCart.cartTop.hint}</Text>
          <Text className='textright' onClick={clink}>
            {textState === false
              ? Get('languages').shoppingCart.cartTop.edit
              : Get('languages').shoppingCart.cartTop.achieve}
          </Text>
        </View>
      </View>
    );
  }
}

export { CartTop };
