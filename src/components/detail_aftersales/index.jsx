import { View } from '@tarojs/components'
import React from 'react'
import { AtDivider } from 'taro-ui'

import { Get } from '../../global-data/index'
import './index.css'

class AfterSales extends React.Component {

    render() {

        return (

            <View className='detailAfterSales'>
                <View className='afterSales'>
                    <View>
                        {Get('languages').afterSales}
                    </View>
                </View>
                <AtDivider />
                    <View className='afterSalesText'>
                        {Get('languages').afterSalesDetail}
                    </View>
                    <View className='afterSalesText'>
                        {Get('languages').freeMoney}
                        {Get('languages').afterSalesFree}
                    </View>
            </View>
        )

    }
}
export { AfterSales }