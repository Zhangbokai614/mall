import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

import { GoodsCard } from '../goods_card/index'
import { Get } from '../../global-data/index'
import * as goodsCardApi from './service'
import './index.css'

class GoodsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      goodsCardInfo: [],
      loading: true
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

    const goodsCardInfo = await goodsCardApi.goodsCard()
    this.setState({
      goodsCardInfo: goodsCardInfo.data,
      loading: false,
    })

    Taro.hideLoading()
  }

  render() {
    const info = this.state.goodsCardInfo

    const listContent = (
      info.map((e) => {
        return (
          <GoodsCard
            key={e.id}
            id={e.id}
            focus={false}
            title={e.title}
            imageSrc={e.images[0]}
            price={e.price}
          />
        )
      })
    )

    return (
      <View>
        <View id='cardList'>
          {listContent}
        </View>
      </View>
    )
  }
}

export { GoodsList }