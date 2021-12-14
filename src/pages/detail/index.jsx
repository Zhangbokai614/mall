import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getCurrentInstance } from '@tarojs/taro'
import { AtDivider, AtCountdown, AtTag } from 'taro-ui'

import Vertical from '../../asset/images/icon/vertical.png'
import { SwiperPosters } from '../../components/detail_swiper'
import { GoodsSelection } from '../../components/at_radio/index'
import { Bottomdetail } from '../../components/detail_bottom/index'
import { Introduction } from '../../components/detail_introduction/index'
import Share from '../../asset/images/icon/share-select.png'
import * as homeApi from './service'
import { Get } from '../../global-data/index'

import './index.css'

export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            goodsInfo: {},
            afterSales: [],
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
        const afterSales = await homeApi.afterSales()
        const activity = await homeApi.activity()
        this.setState({
            goodsInfo: goodsInfo.data.filter((e) => e.id === +id),
            afterSales: afterSales.data.detail,
            afterSalesFree: afterSales.data.free,
            activityName: activity.data[0].activity_name,
            loading: false,
        })
        Taro.hideLoading()
    }

    componentDidMount() {
        console.log(getCurrentInstance().router.params)
    }

    render() {

        const info = this.state.goodsInfo
        const afterSalesDetail = this.state.afterSales
        const afterSalesFree = this.state.afterSalesFree
        const activityName = this.state.activityName
        return (
            this.state.loading
                ? null
                : <View className='index'>
                    <SwiperPosters
                        images={info[0].images}
                    />
                    <View className='priceAndShare'>
                        <View className='infoPrice'>
                            ￥{info[0].price}
                        </View>
                        <AtTag className='activityName'>
                            {activityName}
                        </AtTag>
                        <AtCountdown
                            isCard
                            minutes={1}
                            seconds={10}
                            className='countDown'>
                        </AtCountdown>
                        <button
                            open-type='share'
                            className='buttonShare'>
                            <Image
                                className='imageShare'
                                src={Share}
                                style='width:6vw; height:6vw;'
                            />
                        </button>
                    </View>
                    <View className='goodsintroduction'>
                        {info[0].title}
                    </View>
                    <GoodsSelection
                        image={info[0].images[0]}
                        specs={info[0].specs}
                        inventory={info[0].inventory}
                        price={info[0].price}
                    />
                    <Introduction
                        detailImages={info[0].detailImages}
                    />
                    <View className='detailAfterSales'>
                        <View className='afterSales'>
                            <Image
                                className='vertical'
                                src={Vertical}
                                style='width:2vw; height:9vw;'
                            >
                            </Image>
                            <View className='afterSalesTitle'>
                                {Get('languages').detailPage.afterSales}
                            </View>
                        </View>
                        <AtDivider />
                        <View className='afterSalesText'>
                            {afterSalesDetail}
                        </View>
                        <View className='afterSalesText'>
                            {Get('languages').detailPage.freeMoney}
                            {afterSalesFree}
                        </View>
                    </View>
                    <Bottomdetail />
                </View>

        )
    }
};