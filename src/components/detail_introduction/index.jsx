import { View } from '@tarojs/components'
import React from 'react'
import { AtDivider } from 'taro-ui'

import './index.css'
import { Get } from '../../global-data/index'

class Introduction extends React.Component {

    render() {

        return (
            
            <View className='detailIntroduce'>
                <View className='goodsIntroduce'>
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