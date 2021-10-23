import React from 'react'
import { View, Image } from '@tarojs/components'
import { Swiper, SwiperItem } from '@tarojs/components'

class SwiperPosters extends React.Component {
    
    render() {
        const { images } = this.props
        console.log(images)
        const element = images.map((e, index) => {
            return (
                <SwiperItem key={index}>
                    <View>
                        <Image
                            images={e.images}
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