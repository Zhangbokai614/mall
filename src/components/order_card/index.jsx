import React from 'react'
// import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { CuButton, CuTag } from "taro-color-ui";

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
    const stateMap = {
      "01": text.pendingPayment,
      "02": text.pendingReceipt,
      "03": text.pendingShipments,
      "04": text.completed,
    }

    return (
      <View id='order-card'>
        <View id="card-head">
          <View>
            {text.order_code + ': ' + this.state.order_code}
          </View>
          {
            this.state.order_state == "04"
              ? <CuTag radius='true' color="olive" type="light">
                {stateMap[this.state.order_state]}
              </CuTag>
              : <CuTag radius='true' color="red" type="light">
                {stateMap[this.state.order_state]}
              </CuTag>
          }
        </View>
        <View id='card-content'>
          <View id='goods-info'>
            <Image
              id='goods-info-image'
              style='width: 16vh'
              src={this.state.goods_image}
              mode='widthFix'
            />
            <View id='goods-title-specs'>
              <View id='goods-title'>
                {this.state.goods_title}
              </View>
              <View id='goods-specs'>
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
          <View id='cad-button'>
            <CuButton className='card-button' color='yellow' size="normal" round inline>物流详情</CuButton>
            <CuButton className='card-button' color='red' size="normal" round inline>确认收货</CuButton>
          </View>
        </View>
      </View>
    )
  }
}

export { OrderCard }