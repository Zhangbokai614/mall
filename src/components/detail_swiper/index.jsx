import React from 'react'
import { View, Image } from '@tarojs/components'
import { Swiper, SwiperItem } from '@tarojs/components'

import './index.css'
class SwiperPosters extends React.Component {
    
    render() {
        const { images } = this.props
        const element = images.map((e, index) => {
            return (
                <SwiperItem key={index}>
                    <View className='b'>
                        <Image 
                            src={e}
                            style='width: 100vw; height: 100wh; background: #fff;'
                            />
                            </View>
                </SwiperItem>
            )
        })

        return (
            <Swiper
                className='shadow-lg'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay>
                {element}
            </Swiper>
        )
    }
}

export { SwiperPosters }