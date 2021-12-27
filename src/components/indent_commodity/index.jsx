import React, { Component } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { Get } from '../../global-data';
import './index.css';

const text = Get('languages').indent.commodity;

class IndentCommodity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { link, title, sku, money, value } = this.props;
    return (
      <View className='indext-commodity-levelone'>
        <Image className='indext-commodity-image' src={link}></Image>
        <View className='indext-commodity-image-right'>
          <View className='indext-commodity-image-right-left'>
            <Text className='indext-commodity-title'>{title}</Text>
            <Text className='indext-commodity-config'>{sku}</Text>
          </View>
          <View className='indext-commodity-image-right-right'>
            <Text className='indext-commodity-money'>{text.cny + money}</Text>
            <Text className='indext-commodity-number'>{text.multiply + value}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export { IndentCommodity };
