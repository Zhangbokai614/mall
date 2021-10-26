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
                        <Image 
                            className=''
                            src={e}
                            style='width: 100%; height:100%; background: #fff;'
                            mode='aspectFit'
                            />
                </SwiperItem>
            )
        })

        return (
            <Swiper
            className='swiper'
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