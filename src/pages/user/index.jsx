import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

import { Get } from '../../global-data/index'
import { OptionsCard } from '../../components/options_card'

import pendingPaymentIcon from '../../asset/images/icon/pending-payment.png'
import pendingReceiptIcon from '../../asset/images/icon/pending-receipt.png'
import returnExchangeIcon from '../../asset/images/icon/return-exchange.png'
import allOrders from '../../asset/images/icon/all-orders.png'
import couponsIcon from '../../asset/images/icon/coupons.png'
import addressIcon from '../../asset/images/icon/address.png'
import customerServiceIcon from '../../asset/images/tabs/customer-service-select.png'

import './index.css'

const text = Get('languages').user

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidShow() {
    this.loading()
  }

  async loading() {
    Taro.showLoading({
      title: Get('languages').loading,
    })

    this.setState({
      loading: false,
    })

    Taro.hideLoading()
  }

  render() {
    const ordersCardContent = [
      { text: text.order.pendingPayment, icon: pendingPaymentIcon, path: '/pages/orders/index?selectKind=' + text.order.pendingPayment },
      { text: text.order.pendingReceipt, icon: pendingReceiptIcon, path: '/pages/orders/index?selectKind=' + text.order.pendingReceipt },
      { text: text.order.returnExchange, icon: returnExchangeIcon, path: '/pages/orders/index?selectKind=' + text.order.returnExchange },
      { text: text.order.allOrders, icon: allOrders, path: '/pages/orders/index?selectKind=' + text.order.allOrders },
    ]

    const commonCardContent = [
      { text: text.asset.coupons, icon: couponsIcon, path: '/pages/orders/index' },
      {
        text: text.asset.address, icon: addressIcon, func: () => {
          wx.chooseAddress({
            success(res) {
              console.log(res.userName)
              console.log(res.postalCode)
              console.log(res.provinceName)
              console.log(res.cityName)
              console.log(res.countyName)
              console.log(res.detailInfo)
              console.log(res.nationalCode)
              console.log(res.telNumber)
            }
          })
        }
      },
      { text: text.asset.customerService, icon: customerServiceIcon, contact: true }
    ]

    return (
      this.state.loading
        ? null
        : <View id='body'>
          <View id='user-info' className='card'>
            <View id='avatar-box'>
              <open-data id='avatar-image' type="userAvatarUrl" default-avatar={'../../asset/images/icon/default-avatar.png'}></open-data>
            </View>
            <View id='name'>
              <open-data type="userNickName"></open-data>
            </View>
          </View>
          <View id='content'>
            <OptionsCard
              title={text.order.myOrders}
              content={ordersCardContent}
            />

            <OptionsCard
              title={text.asset.commonFeatures}
              content={commonCardContent}
            />
          </View>

          <View className='technical-support'>
            {text.technicalSupport}
          </View>
        </View>
    )
  }
}
