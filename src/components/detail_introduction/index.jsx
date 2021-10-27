import { View, Image } from '@tarojs/components'
import React from 'react'
import { AtDivider } from 'taro-ui'

import Vertical from '../../asset/images/icon/vertical.png'
import './index.css'
import { Get } from '../../global-data/index'

class Introduction extends React.Component {

    render() {

        return (

            <View className='detailIntroduce'>
                <View className='goodsIntroduce'>
                    <Image
                        className="vertical"
                        src={Vertical}
                        style='width:2vw; height:9vw;'
                    >
                    </Image>
                    <View className='introduceTitle'>
                        {Get('languages').goodsIntroduce}
                    </View>
                </View>
                <AtDivider />

            </View>
        )
    }
}
export { Introduction }