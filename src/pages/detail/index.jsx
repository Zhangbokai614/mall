import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getCurrentInstance } from '@tarojs/taro'
import { AtDivider } from 'taro-ui'

import Vertical from '../../asset/images/icon/vertical.png'
import { SwiperPosters } from '../../components/detail_swiper'
import { GoodsSelection } from '../../components/at_radio/index'
import { Bottomdetail } from '../../components/detail_bottom/index'
import { Specification } from '../../components/detail_specification/index'
import { ProductEvaluation } from '../../components/detail_evaluation/index'
import { Introduction } from '../../components/detail_introduction/index'
import Share from '../../asset/images/icon/share-select.png'
import * as homeApi from './service'
import './index.css'
import { Get } from '../../global-data/index'


export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            goodsInfo: {},
            loading: true,
        }
    }

    componentDidMount() {
        this.loading()
    }

    componentDidShow() {
        this.loading()
    }

    async loading() {
        Taro.showLoading({
            title: Get('languages').loading,
        })

        const { id } = getCurrentInstance().router.params
        const goodsInfo = await homeApi.goodsInfo(+id)
        console.log(goodsInfo)
        this.setState({
            goodsInfo: goodsInfo.data.filter((e) => e.id === +id),
            loading: false,
        })
        Taro.hideLoading()
    }

    componentDidMount() {
        console.log(getCurrentInstance().router.params)
    }

    render() {

        const info = this.state.goodsInfo

        return (
            this.state.loading
                ? null
                : <View className='index'>
                    <View className='images'>
                        <SwiperPosters
                            images={info[0].images}
                        />
                    </View>
                    <View className='priceAndShare'>
                        <View className='infoPrice'>
                            ￥{info[0].price}
                        </View>
                        <Image
                        className='imageShare'
                        src={Share}
                        style='width:6vw; height:6vw;'
                        />
                    </View>
                    <View
                        className='goodsintroduction'
                    >
                        {info[0].title}
                    </View>
                    <View>
                        <GoodsSelection 
                            sku={info[0].sku}
                        />
                    </View>
                    <View >
                        <Specification
                            id={info[0].id}
                            productionCode={info[0].production_code}
                            standardCode={info[0].standard_code}
                            temperature={info[0].shelf_life.temperature}
                            days={info[0].shelf_life.days}
                        />
                    </View>
                    <View>
                        <ProductEvaluation />
                    </View>
                    <View>
                        <Introduction
                            detailImages={info[0].detailImages}
                        />
                    </View>
                    <View className='detailAfterSales'>
                        <View className='afterSales'>
                            <Image
                                className='vertical'
                                src={Vertical}
                                style='width:2vw; height:9vw;'
                            >
                            </Image>
                            <View className='afterSalesTitle'>
                                {Get('languages').afterSales}
                            </View>
                        </View>
                        <AtDivider />
                        <View className='afterSalesText'>
                            {info[0].afterSalesDetail}
                        </View>
                        <View className='afterSalesText'>
                            {Get('languages').freeMoney}
                            {info[0].afterSalesFree}
                        </View>
                    </View>
                    <Bottomdetail />
                </View>

        )
    }
};