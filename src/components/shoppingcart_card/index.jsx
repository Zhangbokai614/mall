import React, { Component } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { Counter } from '../shoppingCart_counter';
import { Get } from '../../global-data';
import './index.css';

const text = Get('languages').shoppingCart.cartCard;

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
    const { link, title, config, number, circle, value, open, max, min } = this.props;
    return (
      <View className='shoppingCart-card-levelOne'>
        <View className='shoppingCart-card-frameleft' onClick={this.alertEvevnt.bind(this)}>
          <View className={circle === false ? 'unselected' : 'selected'}></View>
        </View>
        <View className='shoppingCart-card-align'>
          <Image className='shoppingCart-card-cardImage' mode='scaleToFill' src={link} />
        </View>
        <View className='shoppingCart-card-frameright'>
          <Text className='shoppingCart-card-title'>{title}</Text>
          <Text onClick={open} className='shoppingCart-card-confing'>
            {config}
          </Text>
          <View className='shoppingCart-card-rightBottom'>
            <View className='shoppingCart-card-absolute shoppingCart-card-down'>
              <Text className='shoppingCart-card-money shoppingCart-card-relative'>{text.moneySymbol}</Text>
              <Text className='shoppingCart-card-number'>{number}</Text>
            </View>
            <View className='shoppingCart-card-absolute shoppingCart-card-counter'>
              <Counter value={value} min={min} max={max} onChange={this.number.bind(this)}></Counter>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export { Card };
