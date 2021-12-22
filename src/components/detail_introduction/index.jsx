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

            <View className='main-intro'>
                <View className='container-intro'>
                    <Image
                        className='container-intro-image'
                        src={Vertical}
                        style='width:1.5vw; height:4vh;'
                    >
                    </Image>
                    <View className='container-intro-title'>
                        {Get('languages').detailPage.goodsIntroduce}
                    </View>
                </View>
                <AtDivider 
                className='intro-divider'
                />
                <View className='container-banner'>
                   {detailInfoImages}
                </View>
            </View>
        )
    }
}
export { Introduction }