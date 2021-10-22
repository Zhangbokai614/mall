import React from 'react'
import { View, Image } from '@tarojs/components'
import { Swiper, SwiperItem } from '@tarojs/components'


class SwiperPosters extends React.Component {

    render() {
        console.log(this.props)
        const { images } = this.props
        
        const element = images.map((image, index) => {
            return (
                <SwiperItem key={index}>
                    <View>
                        <Image
                            src={image}
                            mode='heightFix' />
                    </View>
                </SwiperItem>
            )
        })

        return (
            <Swiper
                className='shadow-lg h-2_5'
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