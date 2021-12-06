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
      type: this.props.type
    }
  }

  handleClick() {
    Taro.navigateTo({
      url: '/pages/detail/index?id=' + this.state.id
    })
  }

  render() {
    const { title, imageSrc, price, inventory } = this.props
    const kind = this.state.focus ? 'focus' : 'goods'

    return (
      <View className={'card ' + kind + 'Card'} onClick={this.handleClick.bind(this)}>
        <Image
          className='goodsImage'
          style='width: 100%; background: #fff;'
          src={imageSrc}
          mode='aspectFill'
        />
        <View className='.at-article__h2 title'>
          {title}
        </View>
        <View id='goodsInfoText'>
          <View id='prices'>
            <View className='.at-article__h2 cny price'>
              ￥
            </View>
            <View className='.at-article__h2 price'>
              {price}
            </View>
          </View>
          {
            inventory > 4000
              ? null
              : <AtTag className='.at-article__p' active='false'>tag</AtTag>
          }
        </View>
      </View>
    )
  }
}

export { GoodsCard }