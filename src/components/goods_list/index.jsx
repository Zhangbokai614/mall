import React from 'react'
import { View } from '@tarojs/components'

import { GoodsCard } from '../goods_card/index'

import './index.css'

class GoodsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      goodsCardInfo: props.goodsCardInfo,
      loading: true
    }
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