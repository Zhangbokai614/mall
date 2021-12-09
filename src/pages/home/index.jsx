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
      posters: '',
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
    const homeImages = await homeApi.homeImages()

    this.setState({
      goodsCardInfo: goodsCardInfo.data,
      focusCardInfo: focusCardInfo.data,
      posters: homeImages.data,
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
        />
      )
    })

    return (
      this.state.loading
        ? null
        : <View id='root'>
          <Image
            id='posters'
            style='width: 100%'
            src={this.state.posters}
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
