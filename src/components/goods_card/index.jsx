import React from 'react'
import { View, Image } from '@tarojs/components'

import './index.css'

class GoodsCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            focus: this.props.focus
        }
    }

    render() {
        const imageSrc = this.props.imageSrc
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

                    </View>
                </View>
                : <View className='card goodsCard'>
                    <Image
                        className='cardImage'
                        style='width: 100%; background: #ff0000;'
                        src={imageSrc}
                        mode='scaleToFill'
                    />
                    <View className='goodsInfo'>

                    </View>
                </View>
        )
    }
}

export { GoodsCard }