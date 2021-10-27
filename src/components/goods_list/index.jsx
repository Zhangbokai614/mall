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
      kind: [],
      selectKind: '',
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

    const kind = await goodsCardApi.kind()
    this.setState({
      kind: kind.data,
      selectKind: kind.data[0],
    })

    const goodsCardInfo = await goodsCardApi.goodsCard(this.state.selectKind)
    this.setState({
      goodsCardInfo: goodsCardInfo.data,
      loading: false,
    })

    Taro.hideLoading()
  }

  async handleClick(value) {
    this.setState({
      selectKind: value
    })

    const goodsCardInfo = await goodsCardApi.goodsCard(value)
    this.setState({
      goodsCardInfo: goodsCardInfo.data,
    })
  }

  render() {
    const info = this.state.goodsCardInfo

    console.log(this.state.selectKind, info)

    let tabsBar = this.state.kind.map((e, index) =>
      e === this.state.selectKind
        ? <View className='select' key={index} onClick={this.handleClick.bind(this, e)}>
          <View></View>
          {e}
          <View id='underscore' ></View>
        </View>
        : <View className='unSelect' key={index} onClick={this.handleClick.bind(this, e)}>
          {e}
        </View>
    )

    const tabrContent = (
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
        <View id='tabsBar'>
          {tabsBar}
        </View>
        <View id='cardList'>
          {tabrContent}
        </View>
      </View>
    )
  }
}

export { GoodsList }