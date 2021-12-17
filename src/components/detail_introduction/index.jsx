import { View, Image } from '@tarojs/components'
import React from 'react'
import { AtDivider } from 'taro-ui'

import Vertical from '../../asset/images/icon/vertical.png'
import './index.css'
import { Get } from '../../global-data/index'

class Introduction extends React.Component {

    render() {

        const { detailImages } = this.props
        const detailInfoImages = detailImages.map((e, index) => {
            return (
                <Image
                key={index}
                src={e}
                style='width: 100vw; height:100vw'
                />
            )
        })

        return (

            <View className='detailIntroduce'>
                <View className='goodsIntroduce'>
                    <Image
                        className='vertical'
                        src={Vertical}
                        style='width:2vw; height:9vw;'
                    >
                    </Image>
                    <View className='introduceTitle'>
                        {Get('languages').detailPage.goodsIntroduce}
                    </View>
                </View>
                <AtDivider />
                <View className='introImage'>
                   {detailInfoImages}
                </View>
            </View>
        )
    }
}
export { Introduction }