import React from 'react'
import { View } from '@tarojs/components'

import GoodsCard from '../goods_card/index'

import './index.css'

function GoodsList(props) {
  const info = props.goodsCardInfo

  const listContent = (
    info.map((e) => {
      return (
        <GoodsCard
          key={e.id}
          goodsId={e.id}
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
      <View id='card-list'>
        {listContent}
      </View>
    </View>
  )
}

export { GoodsList }