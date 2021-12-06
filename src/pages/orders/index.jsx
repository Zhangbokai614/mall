import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Taro, getCurrentInstance } from '@tarojs/taro'

import { Get } from '../../global-data/index'
import { Tabs } from '../../components/tabs/index'

import './index.css'

const text = Get('languages').user.order

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kind: [text.pendingPayment, text.pendingReceipt, text.returnExchange, text.allOrders],
      selectKind: getCurrentInstance().router.params.selectKind,
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


    // const ordersInfo = await ordersApi.goodsCard(this.state.selectKind)
    this.setState({
      // goodsCardInfo: goodsCardInfo.data,
      loading: false,
    })

    Taro.hideLoading()
  }

  render() {
    const selectKind = this.state.selectKind

    return (
      <View>
        <Tabs
          kind={this.state.kind}
          selectKind={selectKind}
        />
      </View>
    )
  }
}
