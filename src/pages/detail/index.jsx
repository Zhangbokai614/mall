import React, { Component } from "react"
import { View, Text } from "@tarojs/components"
import Taro from "@tarojs/taro"
import { getCurrentInstance } from '@tarojs/taro'

import { SwiperPosters } from "../../components/detail_swiper"
import { GoodsSelection } from "../../components/at_radio/index"
import { Bottomdetail } from "../../components/detail_bottom/index"
import { Specification } from "../../components/detail_specification/index"
import { ProductEvaluation } from "../../components/detail_evaluation/index"
import { Introduction } from "../../components/detail_introduction/index"
import { AfterSales } from "../../components/detail_aftersales"
import * as homeApi from './service'
import "./index.css"
import { Get } from "../../global-data/index"


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

        const goodsInfo = await homeApi.goodsInfo()
        const { id, type } = getCurrentInstance().router.params
        this.setState({
            goodsInfo: goodsInfo.data[type].filter((e) => e.id === +id),
            loading: false,
        })
        Taro.hideLoading()
    }

    componentDidMount() {
        console.log(getCurrentInstance().router.params)
    }

    render() {

        const postersImages = this.state.goodsInfo
        console.log(postersImages)
        return (
            this.state.loading
                ? null
                : <View className="index">
                    <View className="images">
                        <SwiperPosters
                            images={postersImages[0].images}
                        />
                    </View>
                    <View
                        className="goodsintroduction"
                    >
                        {postersImages[0].title}
                    </View>
                    <View>
                        <GoodsSelection />
                    </View>
                    <View >
                        <Specification />
                    </View>
                    <View>
                        <ProductEvaluation />
                    </View>
                    <View>
                        <Introduction />
                    </View>
                    <View>
                        <AfterSales />
                    </View>
                    <Bottomdetail />
                </View>

        )
    }
};