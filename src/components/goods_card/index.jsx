import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtTag } from 'taro-ui'

import './index.css'

function handleClick(goodsId) {
  Taro.navigateTo({
    url: '/pages/detail/index?id=' + goodsId
  })
}

function GoodsCard(props) {
  const { goodsId, focus, title, imageSrc, price, activityName } = props
  const kind = focus ? 'focus' : 'goods'

  return (
    <View className={'card ' + kind + '-card'} onClick={handleClick.bind(this, goodsId)}>
      <Image
        className='goods-image'
        style='width: 100%; background: #fff;'
        src={imageSrc}
        mode='aspectFill'
      />
      <View className='title'>
        {title}
      </View>
      <View id='goods-info-text'>
        <View id='prices'>
          <View className='cny price'>
            ￥
          </View>
          <View className='price'>
            {price}
          </View>
        </View>
        {
          activityName == 'null'
            ? null
            : <AtTag active='false'>{activityName}</AtTag>
        }
      </View>
    </View>
  )
}

export default GoodsCard