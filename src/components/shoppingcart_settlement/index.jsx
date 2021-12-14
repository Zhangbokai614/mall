import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { Get } from '../../global-data';
import './index.css';

const text = Get('languages').shoppingCart.cartSettlement;

class Settlement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { number, circleClink, circleState, cardDelete, moneySymbol } = this.props;

    const settlement = (
      <>
        <View className='shoppingCart-settlement-levelTwo'>
          <View className='shoppingCart-settlement-total'>
            <Text>{text.total}：</Text>
            <Text className='shoppingCart-settlement-money'>{text.moneySymbol}</Text>
            <Text className='shoppingCart-settlement-number'>{number == undefined ? 0 : number}</Text>
          </View>
          <AtButton
            className='shoppingCart-settlement-button'
            type='primary'
            size='normal'
            circle='true'
            onClick={moneySymbol}
          >
            {text.settlement}
          </AtButton>
        </View>
      </>
    );

    const del = (
      <>
        <View className='shoppingCart-settlement-levelTwo'>
          <AtButton
            className='shoppingCart-settlement-button'
            type='secondary'
            size='normal'
            circle='true'
            onClick={cardDelete}
          >
            {text.delete}
          </AtButton>
        </View>
      </>
    );

    return (
      <View className='shoppingCart-settlement-levelOne'>
        <View onClick={circleClink}>
          <View
            className={
              circleState === false
                ? 'unselected' + ' ' + 'shoppingCart-settlement-circle-margin'
                : 'selected' + ' ' + 'shoppingCart-settlement-circle-margin'
            }
          ></View>
        </View>
        <Text>{text.selectAll}</Text>
        {this.props.topText === false ? settlement : del}
      </View>
    );
  }
}

export { Settlement };
