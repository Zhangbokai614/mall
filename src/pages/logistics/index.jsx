import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'

import { Get } from '../../global-data/index'

import * as orderApi from './service';

import './index.css'

const orderStateMap = Get('orderStateMap')

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderInfo: [],
      orderState: getCurrentInstance().router.params.orderState,
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

    // const orderInfo = await orderApi.orderInfo()

    this.setState({
      // orderInfo: orderInfo.data,
      loading: false,
    })

    wx.hideLoading()
  }

  render() {
    const orderState = this.state.orderState
    return (
      this.state.loading
        ? null
        : <View>
          <View
            id='order-state'
            className={orderState == '04' ? 'green' : 'red'}>
            {orderStateMap[orderState]}
          </View>
        </View>
    )
  }
}
