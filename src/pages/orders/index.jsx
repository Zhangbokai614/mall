import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Taro, getCurrentInstance } from '@tarojs/taro'

import { Get } from '../../global-data/index'
import { Tabs } from '../../components/tabs/index'
import { OrderCard } from '../../components/order_card'

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
      goodsInfo: [],
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

    let goodsInfo = []

    const orderInfo = await orderApi.orderInfo()

    for (let i = 0; i < orderInfo.data.length; i++) {
      let info = await orderApi.goodsInfo(orderInfo.data[i].goods_id)
      goodsInfo.push({
        title: info.data[0].title,
        image: info.data[0].images[0]
      })
    }

    this.setState({
      orderInfo: orderInfo.data,
      goodsInfo: goodsInfo,
      loading: false,
    })

    wx.hideLoading()
  }

  render() {
    const selectKind = this.state.selectKind
    const goodsInfo = this.state.goodsInfo

    const tabsContent = this.state.loading ? null : this.state.orderInfo.map((item, index) => {
      return (
        <OrderCard
          key={index}
          order_code={item.order_code}
          order_state={item.order_state}
          payment_time={item.payment_time}
          goods_image={goodsInfo[index].image}
          goods_title={goodsInfo[0].title}
          specs={item.specs}
          number={item.number}
          cost={item.cost}
          finish={item.finish}
        />
      )
    })

    return (
      <View>
        <Tabs
          id='tabs'
          kind={this.state.kind}
          selectKind={selectKind}
        />
        {tabsContent}
      </View>
    )
  }
}
