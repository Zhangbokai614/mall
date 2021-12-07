import React, { Component } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { AtInputNumber } from 'taro-ui';

import { Get } from '../../global-data';
import './index.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  alertEvevnt() {
    const { handleClick } = this.props;
    handleClick();
  }

  number(value) {
    const { showInfo } = this.props;
    showInfo(value);
  }

  render() {
    const { link, title, config, number, circle, value } = this.props;
    return (
      <View className='outmost'>
        <View className='frameleft' onClick={this.alertEvevnt.bind(this)}>
          <View className={circle === false ? 'unselected' : 'selected'}></View>
        </View>
        <View className='align'>
          <Image className='cardImage' mode='scaleToFill' src={link} />
        </View>
        <View className='frameright'>
          <Text className='at-article__h2'>{title}</Text>
          <View className='confing'>
            <View className='standard'>
              <Text className='at-article__p'>{config}</Text>
            </View>
          </View>
          <View className='absolute down relative'>
            <Text className='money'>{Get('languages').shoppingCart.cartCard.moneySymbol}</Text>
            <Text className='number'>{number}</Text>
            <AtInputNumber
              className='absolute counter'
              min={1}
              max={99}
              step={1}
              value={value}
              onChange={this.number.bind(this)}
            ></AtInputNumber>
          </View>
        </View>
      </View>
    );
  }
}

export { Card };
