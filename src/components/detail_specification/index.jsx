import { View, Image } from '@tarojs/components'
import React from 'react'
import { AtDivider } from 'taro-ui'

import Vertical from '../../asset/images/icon/vertical.png'
import { Get } from '../../global-data/index'
import './index.css'

class Specification extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            type: this.props.type
        }
    }

    render() {

        const { id, productionCode, standardCode, temperature, days, weight } = this.props

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
                    <View >
                        {Get('languages').goodsId}
                    </View>
                    <View className='infoId'>
                        {id}
                    </View>
                </View>
                <View className='goodsDetaiInfo'>
                    <View>
                        {Get('languages').productionLicense}
                    </View>
                    <View className='specificinfo'>
                        {productionCode}
                    </View>
                </View>
                <View className='goodsDetaiInfo'>
                    <View>
                        {Get('languages').productNumber}
                    </View>
                    <View className='specificinfo'>
                        {standardCode}
                    </View>
                </View>
                <View className='goodsDetaiInfo'>
                    <View>
                        {Get('languages').shelfLife}
                    </View>
                    <View className='infotemperature'>
                    {temperature}
                    </View>
                    <View className="infoDays">
                    {days}
                    </View>
                </View>
                <View className='goodsDetaiInfo'>
                    <View>
                    {Get('languages').weight}
                    </View>
                    <View className='infoWeight'>
                    {weight}
                    </View>
                </View>

            </View>
        )
    }
};
export { Specification }