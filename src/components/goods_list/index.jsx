import React from 'react'
import { View } from '@tarojs/components'

import { GoodsCard } from '../goods_card/index'

import './index.css'

class GoodsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    const info = this.props.goodsCardInfo

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
            activityName={e.activity_name}
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