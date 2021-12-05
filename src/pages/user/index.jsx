import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton, AtAvatar, AtInput, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'

import { Get } from '../../global-data/index'
import { OptionsCard } from '../../components/options_card'

import avatar from '../../asset/images/icon/default-avatar.png'
import pendingPaymentIcon from '../../asset/images/icon/pending-payment.png'
import pendingReceiptIcon from '../../asset/images/icon/pending-receipt.png'
import returnExchangeIcon from '../../asset/images/icon/return-exchange.png'
import couponsIcon from '../../asset/images/icon/coupons.png'
import addressIcon from '../../asset/images/icon/address.png'
import customerServiceIcon from '../../asset/images/tabs/customer-service-select.png'

import * as homeApi from './service';
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
      activity: '',
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

    const activityImages = await homeApi.activityImages()

    this.setState({
      activity: activityImages.data.activity,
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
        console.log(this.state.userInfo)
      }
    })
  }

  handleChange(e) {
    e.stopPropagation()
    this.setState({
      isOpened: true
    })
  }

  onClose() {
    this.setState({
      isOpened: false
    })
  }

  render() {
    const ordersCardContent = [
      { text: text.order.pendingPayment, icon: pendingPaymentIcon, path: '/pages/orders/index' },
      { text: text.order.pendingReceipt, icon: pendingReceiptIcon, path: '/pages/orders/index' },
      { text: text.order.returnExchange, icon: returnExchangeIcon, path: '/pages/orders/index' },
    ]

    const commonCardContent = [
      { text: text.asset.coupons, icon: couponsIcon, path: '/pages/orders/index' },
      { text: text.asset.address, icon: addressIcon, path: '/pages/orders/index' },
      { text: text.asset.customerService, icon: customerServiceIcon, path: '/pages/orders/index' }
    ]

    try {
      var value = Taro.getStorageSync('userToken')
      if (value) {
        console.log(value)
      }
    } catch (e) {
      console.log(e)
    }

    return (
      this.state.loading
        ? null
        : <View>
          <View id='nameCard' className='card'>
            <AtAvatar
              circle
              size='large'
              image={this.state.avatarUrl}
              onClick={this.getUserProfile.bind(this)}
            />
            <View id='name' onClick={this.getUserProfile.bind(this)}>
              {this.state.nickName}
            </View>
            <View id='phone' onClick={this.handleChange.bind(this)}>
              {this.state.phone}
            </View>
          </View>
          <View id='content'>
            <OptionsCard
              title={text.order.myOrders}
              headNavigate='true'
              headNavigateText={text.order.allOrders}
              headNavigatePath='/pages/orders/index'
              content={ordersCardContent}
            />

            {
              this.state.activity
                ? <Image
                  id='activity'
                  className='card'
                  style='width: 92%;background: #fff;'
                  src={this.state.activity}
                  mode='widthFix'
                />
                : null
            }

            <OptionsCard
              title={text.asset.commonFeatures}
              content={commonCardContent}
            />

            <View className='.at-article__info technicalSupport'>
              {text.technicalSupport}
            </View>
          </View>

          <AtModal
            isOpened={this.state.isOpened}
            onClose={this.onClose.bind(this)}
          >
            <AtModalHeader>标题</AtModalHeader>
            <AtModalContent>
              <AtInput
                type='number'
                placeholder={text.userInfo.inputPhone}
              />
            </AtModalContent>
            <AtModalAction>
              <AtButton>确定</AtButton>
            </AtModalAction>
          </AtModal>
        </View>
    )
  }
}
