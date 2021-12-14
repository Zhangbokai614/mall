import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'

import { Get } from '../../global-data/index'
import { Tabs } from '../../components/tabs/index'

import * as orderApi from './service';

import './index.css'

const text = Get('languages').user.order

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kind: [text.pendingPayment, text.pendingReceipt, text.returnExchange, text.allOrders],
      selectKind: getCurrentInstance().router.params.selectKind,
      orderInfo: [],
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

    const orderInfo = await orderApi.orderInfo()

    this.setState({
      orderInfo: orderInfo.data,
      loading: false,
    })

    wx.hideLoading()
  }

  render() {
    return (
      this.state.loading
        ? null
        : <View>
          <Tabs
            id='tabs'
            kind={this.state.kind}
            selectKind={this.state.selectKind}
            content={this.state.orderInfo}
          />
        </View>
    )
  }
}
