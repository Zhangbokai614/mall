import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'
import { CuButton } from "taro-color-ui";

import { Get } from '../../global-data/index'
import * as orderApi from './service';

import contactMerchantIcon from '../../asset/images/icon/detail-customer-service-select.png'
import addressIcon from '../../asset/images/icon/address.png'

import './index.css'

const text = Get('languages').user.order
const orderStateMap = Get('orderStateMap')

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderCode: getCurrentInstance().router.params.orderCode,
      orderInfo: '',
      loading: true
    }
  }

  componentDidShow() {
    this.loading()
  }

  async loading() {
    Taro.showLoading({
      title: Get('languages').loading,
    })

    const orderInfo = await orderApi.orderInfo(this.state.orderCode)

    this.setState({
      orderInfo: orderInfo.data[0],
      loading: false,
    })

    Taro.hideLoading()
  }

  checkLogistics(orderCode) {
    Taro.navigateTo({
      url: '/pages/logistics/index?orderCode=' + orderCode
    })
  }

  render() {
    const orderInfo = this.state.orderInfo

    const listCardGoods = {
      [text.commodityPrice]: orderInfo.commodityPrice,
      [text.postage]: orderInfo.postage,
      [text.orderLumpSum]: orderInfo.orderLumpSum,
      [text.limitDiscounts]: orderInfo.limitDiscounts
    }

    const goodsContent = Object.keys(listCardGoods).map((item, index) => {
      return (
        <View className='goods-info' key={index}>
          <View className='info-type'>{item}</View>
          <View className='info-text'>{Get('languages').cny + listCardGoods[item]}</View>
        </View>
      )
    })

    const listCardOrder = {
      [text.orderCode]: orderInfo.order_code,
      [text.orderTime]: orderInfo.order_time,
      [text.paymentType]: orderInfo.payment_type,
      [text.paymentTime]: orderInfo.payment_time
    }

    const orderContent = Object.keys(listCardOrder).map((item, index) => {
      return (
        <View className='order-info' key={index}>
          <View className='info-type'>{item}</View>
          <View className='info-text'>{listCardOrder[item]}</View>
        </View>
      )
    })

    return (
      this.state.loading
        ? null
        : <View>
          <View
            id='order-state'
            className={orderInfo.order_state == '04' ? 'order-state--green' : 'order-state--red'}>
            {orderStateMap[orderInfo.order_state]}
          </View>
          <View className='text'>
            {text.logisticsInfo}
          </View>
          <View className='card' id='logistics' onClick={this.checkLogistics.bind(this, orderInfo.order_code)}>
            <Image
              id='logistics__address-icon'
              src={addressIcon}
              mode='aspectFit'
            />
            <View id='logistics_info'>
              <View id='logistics_info_recipient'>
                <View className='recipient-text'>{orderInfo.name}</View>
                <View className='recipient-text'>{orderInfo.mobile}</View>
              </View>
              <View id='logistics_info_address'>{orderInfo.address}</View>
            </View>
            <View id='logistics_chevron-right'>
              <AtIcon value='chevron-right' size='18'></AtIcon>
            </View>
          </View>
          <View className='text'>
            {text.goodsInfo}
          </View>
          <View className='card goods-card'>
            <View id='goods-card_goods-info'>
              <Image
                id='goods-info_image'
                style='width: 12vh'
                src={orderInfo.image}
                mode='widthFix'
              />
              <View id='goods-info_text'>
                <View id='goods-info_text_title'>
                  {orderInfo.title}
                </View>
                <View id='goods-info_text_specs'>
                  <View>{orderInfo.specs}</View>
                  <View id='goods-info_text_applyRefund'>{text.applyRefund}</View>
                </View>
              </View>
            </View>
            {goodsContent}
            <View id='goods-card_total'>
              <View id='total_cost'>
                {Get('languages').cny + orderInfo.cost}
              </View>
              <View id='total_text'>
                {text.total + orderInfo.number + text.sumTotal}
              </View>
            </View>
          </View>
          <View className='text'>
            {text.orderInfo}
          </View>
          <View className='card'>
            {orderContent}
          </View>
          <View id='contact-card' className='text card'>
            <button id='contact-card_button' open-type="contact">
              <Image
                id='contact-card-icon'
                src={contactMerchantIcon}
                mode='aspectFit'
              />
              <View className='contact-card-text'>
                {text.contactTheMerchant}
              </View>
            </button>
          </View>
          <View id='buttons-card'>
            <CuButton
              className='buttons-card_button'
              color='yellow'
              size="large"
              round
              inline
              onClick={this.checkLogistics.bind(this, orderInfo.order_code)}
            >{text.CheckLogistics}</CuButton>
            <CuButton className='buttons-card_button' color='red' size="large" round inline>{text.confirmTheReceiptOfGoods}</CuButton>
          </View>
        </View>
    )
  }
}
