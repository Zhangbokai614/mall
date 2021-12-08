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
    const { number, circleClink, circleState, cardDelete } = this.props;

    const settlement = (
      <>
        <View className='absolute flex-row'>
          <View>
            <Text className='at-article__h2 at-article__h2-margin'>{text.total}：</Text>
            <Text className='money'>{text.moneySymbol}</Text>
            <Text className='number'>{number == undefined ? 0 : number}</Text>
          </View>
          <AtButton className='bottom' type='primary' size='normal' circle='true'>
            {text.settlement}
          </AtButton>
        </View>
      </>
    );

    const del = (
      <>
        <View className='absolute flex-row'>
          <AtButton className='bottom' type='secondary' size='normal' circle='true' onClick={cardDelete}>
            {text.delete}
          </AtButton>
        </View>
      </>
    );

    return (
      <View className='footer flex-row align relative'>
        <View onClick={circleClink}>
          <View className={circleState === false ? 'unselected' + ' ' + 'margin' : 'selected' + ' ' + 'margin'}></View>
        </View>
        <Text className='at-article__h2 at-article__h2-margin'>{text.selecTall}</Text>
        {this.props.topText === false ? settlement : del}
      </View>
    );
  }
}

export { Settlement };
