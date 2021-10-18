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
        const { title, imageSrc, price, inventory } = this.props

        return (
            this.state.focus
                ? <View className='card focusCard'>
                    <Image
                        className='cardImage'
                        style='width: 100%; height: 60%; background: #fff;'
                        src={imageSrc}
                        mode='widthFix'
                    />
                    <View className='focusInfo'>
                        <View className='.at-article__h1'>
                            {title}
                        </View>
                        <View id='focusInfoText'>
                            <View id='price'>
                                <View className='.at-article__h2 cny'>
                                    ￥
                                </View>
                                <View className='.at-article__h2'>
                                    {price}
                                </View>
                                <AtTag active='false' circle>标签</AtTag>
                            </View>
                            <View>
                                <AtIcon className='shoping-cart-icon' value='shopping-cart' size='24' color='#F00'></AtIcon>
                            </View>
                        </View>
                    </View>
                </View>
                : <View className='card goodsCard'>
                    <Image
                        className='cardImage'
                        style='width: 100%; background: #ff0000;'
                        src={imageSrc}
                        mode='scaleToFill'
                    />
                    <View className='.at-article__h1'>
                        {title}
                    </View>
                    <View id='focusInfoText'>
                        <View id='price'>
                            <View className='.at-article__h2 cny'>
                                ￥
                            </View>
                            <View className='.at-article__h2'>
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