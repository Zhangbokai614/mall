import React from 'react'
// import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtTag } from 'taro-ui'

import { Get } from '../../global-data/index'

import './index.css'

const text = Get('languages').user.order

class OrderCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order_code: props.order_code,
      order_state: props.order_state,
      payment_time: props.payment_time,
      goods_title: props.goods_title,
      goods_image: props.goods_image,
      specs: props.specs,
      number: props.number,
      cost: props.cost,
      finish: props.finish,
    }
  }

  // handleClick() {
  //   Taro.navigateTo({
  //     url: '/pages/detail/index?id=' + this.state.id
  //   })
  // }

  render() {
    const paymentTime = new Date(this.state.payment_time)
    return (
      <View id='order-card'>
        <View id="card-head">
          <View>
            {text.order_code + ': ' + this.state.order_code}
          </View>
          <AtTag>
            {this.state.order_state}
          </AtTag>
        </View>
        <View id='card-content'>
          <View id='goods-info'>
            <Image
              id='goods-info-image'
              style='width: 14vh'
              src={this.state.goods_image}
              mode='widthFix'
            />
            <View id='goods-title-specs'>
              <View id='goods-info-title'>
                {this.state.goods_title}
              </View>
              <View>
                {this.state.specs}
              </View>
            </View>
          </View>
          <View id='total'>
            {text.total + this.state.number + text.sum_total + this.state.cost}
          </View>
        </View>
        <View id='card-foot'>
          <View id='payment-time'>
            {(paymentTime.getMonth() + 1) + '-' + paymentTime.getDay() + " " + paymentTime.getHours() + ":" + paymentTime.getMinutes()}
          </View>
        </View>
      </View>
    )
  }
}

export { OrderCard }