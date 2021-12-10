import React, { Component } from 'react'
import { View, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getCurrentInstance } from '@tarojs/taro'
import { AtDivider } from 'taro-ui'

import Vertical from '../../asset/images/icon/vertical.png'
import { SwiperPosters } from '../../components/detail_swiper'
import { GoodsSelection } from '../../components/at_radio/index'
import { Bottomdetail } from '../../components/detail_bottom/index'
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
        this.setState({
            goodsInfo: goodsInfo.data.filter((e) => e.id === +id),
            afterSales: afterSales.data.detail,
            afterSalesFree: afterSales.data.free,
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
                    <View
                        className='goodsintroduction'
                    >
                        {info[0].title}
                    </View>
                    <View>
                        <GoodsSelection 
                            image={info[0].images[0]}
                            specs={info[0].specs}
                        />
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
                                {Get('languages').detailPage.afterSales}
                            </View>
                        </View>
                        <AtDivider />
                        <View className='afterSalesText at-article__h2'>
                            {afterSalesDetail}
                        </View>
                        <View className='afterSalesText at-article__h2'>
                            {Get('languages').detailPage.freeMoney}
                            {afterSalesFree}
                        </View>
                    </View>
                    <Bottomdetail />
                </View>

        )
    }
};