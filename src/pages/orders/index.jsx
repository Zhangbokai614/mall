import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './index.css'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {

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


    const goodsCardInfo = await goodsCardApi.goodsCard(this.state.selectKind)
    this.setState({
      goodsCardInfo: goodsCardInfo.data,
      loading: false,
    })

    Taro.hideLoading()
  }

  render() {
    return (
      <View>
        xxx
      </View>
    )
  }
}
