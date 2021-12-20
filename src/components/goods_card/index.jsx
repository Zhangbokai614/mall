import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtTag } from 'taro-ui'

import './index.css'

class GoodsCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: this.props.focus,
      id: this.props.id,
    }
  }

  handleClick() {
    Taro.navigateTo({
      url: '/pages/detail/index?id=' + this.state.id
    })
  }

  render() {
    const { title, imageSrc, price, activityName } = this.props
    const kind = this.state.focus ? 'focus' : 'goods'

    // console.log(activityCode)
    return (
      <View className={'card ' + kind + '-card'} onClick={this.handleClick.bind(this)}>
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
}

export { GoodsCard }