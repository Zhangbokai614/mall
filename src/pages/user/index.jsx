import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

import { Get } from '../../global-data/index'
import { OptionsCard } from '../../components/options_card'

import avatar from '../../asset/images/icon/default-avatar.png'
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
      avatarUrl: avatar,
      nickName: text.userInfo.defaultName,
      hasUserInfo: false,
      loading: true,
      phone: text.userInfo.bindPhone,
      isOpened: false,
    }
  }

  componentDidShow() {
    this.loading()
  }

  async loading() {
    Taro.showLoading({
      title: Get('languages').loading,
    })

    // const activityImages = await homeApi.activityImages()

    this.setState({
      //   activity: activityImages.data.activity,
      loading: false,
    })

    Taro.hideLoading()
  }

  getUserProfile() {
    wx.getUserProfile({
      desc: text.userInfo.descText,
      success: (res) => {
        console.log(res)
        this.setState({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
          hasUserInfo: true
        })
      }
    })
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
          <View id='name-card' className='card'>
            <AtAvatar
              circle
              size='large'
              image={this.state.avatarUrl}
              onClick={this.getUserProfile.bind(this)}
            />
            <View id='name' onClick={this.getUserProfile.bind(this)}>
              {this.state.nickName}
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
