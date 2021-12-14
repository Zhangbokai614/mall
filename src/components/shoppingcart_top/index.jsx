import { View, Text } from '@tarojs/components';
import React, { Component } from 'react';

import { Get } from '../../global-data';
import './index.css';

const text = Get('languages').shoppingCart.cartTop;

class CartTop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { textState, clink } = this.props;
    return (
      <View className='shoppingCart-top-levelOne'>
        <View className='shoppingCart-top-leveltwo'>
          <Text className='shoppingCart-left-text'>{text.hint}</Text>
          <Text className='shoppingCart-right-text' onClick={clink}>
            {textState === false ? text.edit : text.achieve}
          </Text>
        </View>
      </View>
    );
  }
}

export { CartTop };
