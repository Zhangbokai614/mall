import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtButton } from "taro-ui";
import { CuButton, CuTag } from "taro-color-ui";

import { Get } from '../../global-data/index'

import './index.css'

const text = Get('languages').user.order
const orderStateMap = Get('orderStateMap')

function handleClick(orderCode) {
  Taro.navigateTo({
    url: '/pages/order-detail/index?orderCode=' + orderCode
  })
}

function checkLogistics(orderCode, e) {
  e.stopPropagation()
  Taro.navigateTo({
    url: '/pages/logistics/index?orderCode=' + orderCode
  })
}

function OrderCard(props) {
  const orderInfo = props.orderInfo
  const paymentTime = new Date(orderInfo.payment_time)

  return (
    <View className='order-card' onClick={handleClick.bind(this, orderInfo.order_code)}>
      <View id="card-head">
        <View>
          {text.orderCode + ': ' + orderInfo.order_code}
        </View>
        {
          orderInfo.order_state == "04"
            ? <CuTag className='order-tag' radius='true' color="olive" type="light">
              {orderStateMap[orderInfo.order_state]}
            </CuTag>
            : <CuTag className='order-tag' radius='true' color="red" type="light">
              {orderStateMap[orderInfo.order_state]}
            </CuTag>
        }
      </View>
      <View id='card-content'>
        <View id='goods-info'>
          <Image
            id='goods-info-image'
            style='width: 16vh'
            src={orderInfo.image}
            mode='widthFix'
          />
          <View id='goods-title-specs'>
            <View id='goods-title'>
              {orderInfo.title}
            </View>
            <View id='goods-specs'>
              {orderInfo.specs}
            </View>
          </View>
        </View>
        <View id='total'>
          {text.total + orderInfo.number + text.sumTotal + Get('languages').cny + orderInfo.cost}
        </View>
      </View>
      <View id='card-foot'>
        <View id='payment-time'>
          {
            ('0' + (paymentTime.getMonth() + 1)).slice(-2) + '-' +
            ('0' + paymentTime.getDate()).slice(-2) + " " +
            ('0' + paymentTime.getHours()).slice(-2) + ":" +
            ('0' + paymentTime.getMinutes()).slice(-2)
          }
        </View>
        <View id='card-buttons'>
          <AtButton
            className='card-button card-button--yellow'
            circle='true'
            size='normal'
            onClick={checkLogistics.bind(this, orderInfo.order_code)}
          >
            {text.CheckLogistics}
          </AtButton>
          <AtButton className='card-button card-button--red' size='normal' circle='true'>{text.confirmTheReceiptOfGoods}</AtButton>
        </View>
      </View>
    </View>
  )
}

export default OrderCard