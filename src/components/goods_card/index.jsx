import React from 'react'
import { View, Image } from '@tarojs/components'
import { AtIcon, AtTag } from 'taro-ui'

import './index.css'

class GoodsCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            focus: this.props.focus
        }
    }

    render() {
        const { title, imageSrc, price } = this.props

        return (
            this.state.focus
                ? <View className='card focusCard'>
                    <Image
                        className='focusImage'
                        style='width: 100%; height: 60%; background: #fff;'
                        src={imageSrc}
                        mode='aspectFill'
                    />
                    <View className='focusInfo'>
                        <View className='.at-article__h1 focusTitle'>
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
                                <AtTag className='.at-article__h2' active='false' circle>tag</AtTag>
                            </View>
                            <AtIcon className='shoping-cart-icon' value='shopping-cart' size='24' color='#F00'></AtIcon>
                        </View>
                    </View>
                </View>
                : <View className='card goodsCard'>
                    <Image
                        className='cardImage'
                        style='width: 100%; background: #fff;'
                        src={imageSrc}
                        mode='aspectFit'
                    />
                    <View className='.at-article__h1 cardTitle'>
                        {title}
                    </View>
                    <View id='goodsInfoText'>
                        <View id='price'>
                            <View className='.at-article__h2 cny price'>
                                ￥
                            </View>
                            <View className='.at-article__h2 price'>
                                {price}
                            </View>
                        </View>
                        <View>
                            <AtIcon className='shoping-cart-icon' value='shopping-cart' size='24' color='#F00'></AtIcon>
                        </View>
                    </View>
                </View>
        )
    }
}

export { GoodsCard }