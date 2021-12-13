import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import { CuButton } from "taro-color-ui";

import { Get } from '../../global-data/index'
import * as orderApi from './service';

import contactMerchantIcon from '../../asset/images/icon/detail-customer-service-select.png'
import addressIcon from '../../asset/images/icon/address.png'

import './index.css'

const text = Get('languages').user.order

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
    wx.showLoading({
      title: Get('languages').loading,
    })

    const orderInfo = await orderApi.orderInfo(this.state.orderCode)

    this.setState({
      orderInfo: orderInfo.data[0],
      loading: false,
    })

    wx.hideLoading()
  }

  render() {

    const stateMap = {
      "01": text.pendingPayment,
      "02": text.pendingReceipt,
      "03": text.pendingShipments,
      "04": text.completed,
    }
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
          <View id='order-state' className={orderInfo.order_state == '04' ? 'green' : 'red'}>{stateMap[orderInfo.order_state]}</View>
          <View className='text'>
            {text.logisticsInfo}
          </View>
          <View className='card' id='logistics'>
            <Image
              id='address-icon'
              src={addressIcon}
              mode='aspectFit'
            />
            <View id='logistics-info'>
              <View id='recipient'>
                <View className='recipient-info'>{orderInfo.name}</View>
                <View className='recipient-info'>{orderInfo.mobile}</View>
              </View>
              <View id='address'>{orderInfo.address}</View>
            </View>
          </View>
          <View className='text'>
            {text.goodsInfo}
          </View>
          <View className='card'>
            <View id='card-content'>
              <View id='goods-info'>
                <Image
                  id='goods-info-image'
                  style='width: 12vh'
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
              {goodsContent}
              <View id='total'>
                <View id='cost'>
                  {Get('languages').cny + orderInfo.cost}
                </View>
                <View id='cost-text'>
                  {text.total + orderInfo.number + text.sumTotal}
                </View>
              </View>
            </View>
          </View>
          <View className='text'>
            {text.orderInfo}
          </View>
          <View className='card'>
            {orderContent}
          </View>
          <View className='card'>
            <View id='contact-merchant' className='text'>
              <button id='contactButton' open-type="contact">
                <Image
                  id='contact-merchant-icon'
                  src={contactMerchantIcon}
                  mode='aspectFit'
                />
                {text.contactTheMerchant}
              </button>
            </View>
          </View>
          <View id='card-buttons'>
            <CuButton className='card-button' color='yellow' size="large" round inline>{text.CheckLogistics}</CuButton>
            <CuButton className='card-button' color='red' size="large" round inline>{text.confirmTheReceiptOfGoods}</CuButton>
          </View>
        </View>
    )
  }
}
