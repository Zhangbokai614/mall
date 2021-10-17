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
                ? <View>
                    <Image
                        style='width: 100%;background: #fff;'
                        src={imageSrc}
                        mode='widthFix'
                    />
                </View>
                : <View className='focusCard'>
                    <Image
                        style='width: 100%; background: #ff0000;'
                        src={imageSrc}
                        mode='scaleToFill'
                    />
                    <View className='info'>

                    </View>
                </View>
        )
    }
}

export { GoodsCard }