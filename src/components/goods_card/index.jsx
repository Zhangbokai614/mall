import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtTag } from 'taro-ui'

import './index.css'
import cart from '../../asset/images/icon/cart.png'

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

    return (
      this.state.focus
        ? <View className='card focusCard' onClick={this.handleClick.bind(this)}>
          <Image
            className='focusImage'
            style='width: 100%; background: #fff;'
            src={imageSrc}
            mode='aspectFill'
          />
          <View className='focusInfo'>
            <View className='.at-article__h1 title'>
              {title}
            </View>
            <View id='focusInfoText'>
              <View id='price'>
                <View className='.at-article__h2 cny price'>
                  ￥
                </View>
                <View className='.at-article__h2 price'>
                  {price}
                </View>
                <AtTag className='.at-article__h2' active='false'>tag</AtTag>
              </View>
              <View className='shpingCartIconBox'>
                <Image
                  src={cart}
                  style='height: 3.2vh; width: 3.2vh'
                />
              </View>
            </View>
          </View>
        </View>
        : <View className='card goodsCard' onClick={this.handleClick.bind(this)}>
          <Image
            className='cardImage'
            style='width: 100%; background: #fff;'
            src={imageSrc}
            mode='aspectFit'
          />
          <View className='.at-article__h1 title'>
            {title}
          </View>
          {
            inventory > 4000
              ? <View></View>
              : <View className='goodsCardTagBox'>
                <AtTag className='goodsCardTag' active='false'>tag</AtTag>
              </View>
          }
          <View id='goodsInfoText'>
            <View id='price'>
              <View className='.at-article__h2 cny price'>
                ￥
              </View>
              <View className='.at-article__h2 price'>
                {price}
              </View>
            </View>
            <View className='shpingCartIconBox'>
              <Image
                src={cart}
                style='height: 3.2vh; width: 3.2vh'
              />
            </View>
          </View>
        </View>
    )
  }
}

export { GoodsCard }