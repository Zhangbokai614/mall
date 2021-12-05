import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtNoticebar } from 'taro-ui'

import { GoodsCard } from '../../components/goods_card/index'
import { GoodsList } from '../../components/goods_list/index'
import { Get } from '../../global-data/index'
import * as homeApi from './service';
import './index.css'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusCardInfo: [],
      noticebar: '',
      posters: '',
      activity: '',
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

    const focusCardInfo = await homeApi.focus()
    const noticebar = await homeApi.noticebar()
    const homeImages = await homeApi.homeImages()

    this.setState({
      focusCardInfo: focusCardInfo.data,
      noticebar: noticebar.data,
      posters: homeImages.data.posters,
      activity: homeImages.data.activity,
      loading: false,
    })

    console.log(this.state.activity)
    Taro.hideLoading()
  }

  render() {
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
          <AtNoticebar
            marquee
            icon='volume-plus'
            speed='30'
          >
            {this.state.noticebar}
          </AtNoticebar>

          <Image
            id='posters'
            style='width: 100%;background: #fff;'
            src={this.state.posters}
            mode='widthFix'
          />

          <View id='activitys'>
            <Image
              id='activity'
              className='card'
              style='width: 96%;background: #fff;'
              src={this.state.activity}
              mode='widthFix'
            />
            {focusCard}
          </View>

          <GoodsList />
        </View>
    )
  }
}
