import { View, Image } from '@tarojs/components'
import React from 'react'
import { AtDivider } from 'taro-ui'

import Vertical from '../../asset/images/icon/vertical.png'
import { Get } from '../../global-data/index'
import './index.css'

class Specification extends React.Component {

    render() {
        return (
            <View className='detailSpecification'>
                <View className='goodsSpecification'>
                    <Image
                        className="vertical"
                        src={Vertical}
                        style='width:2vw; height:9vw;'
                    >
                    </Image>
                    <View className='specificationTitle'>
                        {Get('languages').goodsSpecification}
                    </View>
                </View>
                <AtDivider />
                <View className='goodsDetaiInfo'>
                    {Get('languages').goodsId}
                </View>
                <View className='goodsDetaiInfo'>
                    {Get('languages').productionLicense}
                </View>
                <View className='goodsDetaiInfo'>
                    {Get('languages').productNumber}
                </View>
                <View className='goodsDetaiInfo'>
                    {Get('languages').shelfLife}
                </View>
                <View className='goodsDetaiInfo'>
                    {Get('languages').weight}
                </View>

            </View>
        )
    }
};
export { Specification }