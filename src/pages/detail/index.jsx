import React, { Component } from "react"
import { View, Image } from "@tarojs/components"
import Taro from "@tarojs/taro"
import { getCurrentInstance } from '@tarojs/taro'
import { AtDivider } from 'taro-ui'

import Vertical from '../../asset/images/icon/vertical.png'
import { SwiperPosters } from "../../components/detail_swiper"
import { GoodsSelection } from "../../components/at_radio/index"
import { Bottomdetail } from "../../components/detail_bottom/index"
import { Specification } from "../../components/detail_specification/index"
import { ProductEvaluation } from "../../components/detail_evaluation/index"
import { Introduction } from "../../components/detail_introduction/index"
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

        const info = this.state.goodsInfo
        const type = Object.keys(info)
        let key = 0
        let goodsListInfo = []
    
        const focusList = type.map((t) => {
          goodsListInfo[t] = []
          return info[t].map((e) => {
            key += 1
            if (e.focus && e.inventory !== 0) {
              return (
                <Specification
                  key={e.id}
                  id={e.id}
                  productionCode={e.production_code}
                  standardCode={e.standard_code}
                  shelfLife={e.shelf_life}
                  type={t}
                />
              )
            } else if (!e.focus && e.inventory !== 0) {
              goodsListInfo[t].push(e)
            }
          })
        })

        return (
            this.state.loading
                ? null
                : <View className="index">
                    <View className="images">
                        <SwiperPosters
                            images={info[0].images}
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
                        <Specification 
                        id={postersImages[0].id}
                        productionCode={postersImages[0].production_code}
                        standardCode={postersImages[0].shelf_life}
                        />
                    </View>
                    <View>
                        <ProductEvaluation />
                    </View>
                    <View>
                        <Introduction />
                    </View>
                    <View className='detailAfterSales'>
                        <View className='afterSales'>
                            <Image
                                className="vertical"
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
                            {Get('languages').afterSalesDetail}
                        </View>
                        <View className='afterSalesText'>
                            {Get('languages').freeMoney}
                            {Get('languages').afterSalesFree}
                        </View>
                    </View>
                    <Bottomdetail />
                </View>

        )
    }
};