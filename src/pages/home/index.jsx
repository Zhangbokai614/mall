import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

import { GoodsCard } from '../../components/goods_card/index'
import { GoodsList } from '../../components/goods_list/index'
import { Get } from '../../global-data/index'

import * as homeApi from './service';

import './index.css'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goodsCardInfo: [],
      focusCardInfo: [],
      noticebar: '',
      banner: '',
      loading: true,
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

    const goodsCardInfo = await homeApi.goodsCardInfo()
    const focusCardInfo = await homeApi.focus()
    const banner = await homeApi.banner()

    this.setState({
      goodsCardInfo: goodsCardInfo.data,
      focusCardInfo: focusCardInfo.data,
      banner: banner.data,
      loading: false,
    })

    Taro.hideLoading()
  }

  render() {
    const goodsCardInfo = this.state.goodsCardInfo
    const focusCardInfo = this.state.focusCardInfo

    const focusCard = focusCardInfo.map((e) => {
      return (
        <GoodsCard
          key={e.id}
          id={e.id}
          focus={true}
          title={e.title}
          imageSrc={e.images[0]}
          price={e.price}
          activityName={e.activity_name}
        />
      )
    })

    return (
      this.state.loading
        ? null
        : <View id='root'>
          <Image
            id='banner'
            style='width: 100%'
            src={this.state.banner}
            mode='widthFix'
          />

          <View id='goods'>
            <View id='activitys'>
              {focusCard}
            </View>
            <GoodsList goodsCardInfo={goodsCardInfo}/>
          </View>
        </View>
    )
  }
}
