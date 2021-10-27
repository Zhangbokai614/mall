import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton, AtAvatar, AtInput, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'

import { Get } from '../../global-data/index'
import { OptionsCard } from '../../components/options_card'
import avatar from '../../asset/images/icon/default-avatar.png'
import pendingPaymentIcon from '../../asset/images/icon/pending-payment.png'
import pendingReceiptIcon from '../../asset/images/icon/pending-receipt.png'
import pendingAppraiseIcon from '../../asset/images/icon/pending-appraise.png'
import returnExchangeIcon from '../../asset/images/icon/return-exchange.png'
import couponsIcon from '../../asset/images/icon/coupons.png'
import addressIcon from '../../asset/images/icon/address.png'
import customerServiceIcon from '../../asset/images/tabs/customer-service-select.png'

import * as homeApi from './service';
import './index.css'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatarUrl: avatar,
      nickName: Get('languages').defaultName,
      hasUserInfo: false,
      loading: true,
      activity: '',
      phone: Get('languages').bindPhone,
      isOpened: false,
    }
  }

  componentDidMount() {
    this.loading()
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
      desc: Get('languages').descText,
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
      { text: Get('languages').pendingPayment, icon: pendingPaymentIcon, path: '/pages/orders/index' },
      { text: Get('languages').pendingReceipt, icon: pendingReceiptIcon, path: '/pages/orders/index' },
      { text: Get('languages').pendingAppraise, icon: pendingAppraiseIcon, path: '/pages/orders/index' },
      { text: Get('languages').returnExchange, icon: returnExchangeIcon, path: '/pages/orders/index' },
    ]

    const commonCardContent = [
      { text: Get('languages').coupons, icon: couponsIcon, path: '/pages/orders/index' },
      { text: Get('languages').address, icon: addressIcon, path: '/pages/orders/index' },
      { text: Get('languages').customerService, icon: customerServiceIcon, path: '/pages/orders/index' }
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
              title={Get('languages').myorDers}
              headNavigate='true'
              headNavigateText={Get('languages').allDers}
              headNavigatePath='/pages/orders/index'
              content={ordersCardContent}
            />
            <Image
              id='activity'
              className='card'
              style='width: 92%;background: #fff;'
              src={this.state.activity}
              mode='widthFix'
            />
            <OptionsCard
              title={Get('languages').commonFeatures}
              content={commonCardContent}
            />
          </View>
          <View className='.at-article__info technicalSupport'>
            {Get('languages').technicalSupport}
          </View>

          <AtModal
            isOpened={this.state.isOpened}
            onClose={this.onClose.bind(this)}
          >
            <AtModalHeader>标题</AtModalHeader>
            <AtModalContent>
              <AtInput
                type='number'
                placeholder={Get('languages').inputPhone}
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
