import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtNoticebar } from 'taro-ui'

import { GoodsCard } from '../../components/goods_card/index'
import * as homeApi from './service';
import { Get } from '../../global-data/index'
import './index.css'

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            goodsInfo: {},
            noticebar: '',
            imageLoading: true
        }
    }

    async componentDidMount() {

        Taro.showLoading({
            title: Get('languages').loading,
        })

        const goodsInfo = await homeApi.goodsInfo()
        const noticebar = await homeApi.noticebar()
        const homeImages = await homeApi.homeImages()

        this.setState({
            goodsInfo: goodsInfo.data,
            noticebar: noticebar.data,
            posters: homeImages.data.posters,
            activity: homeImages.data.activity,
            loading: false,
        })

        Taro.hideLoading()
    }

    render() {
        const info = this.state.goodsInfo
        const type = Object.keys(info)
        let key = 0

        const FocusList = type.map((t) => {
            key += 1
            return info[t].map((e) => {
                if (e.focus) {
                    return (
                        <GoodsCard
                            key={key}
                            focus={e.focus}
                            imageSrc={e.images}
                        />
                    )
                }
            })
        })

        const CardList = type.map((t) => {
            key += 1
            return info[t].map((e) => {
                if (!e.focus) {
                    return (
                        <GoodsCard
                            key={key}
                            focus={e.focus}
                            imageSrc={e.images}
                        />
                    )
                }
            })
        })

        return (
            this.state.loading
                ? null
                : <View id='root'>
                    <AtNoticebar marquee icon='volume-plus'>
                        {this.state.noticebar}
                    </AtNoticebar>

                    <Image
                        id='posters'
                        style='width: 100%;background: #fff;'
                        src={this.state.posters}
                        mode='widthFix'
                    />

                    <Image
                        id='activity'
                        style='width: 100%;background: #fff;'
                        src={this.state.activity}
                        mode='widthFix'

                    />

                    {FocusList}

                    <View id='cardList'>
                        {CardList}
                    </View>
                </View>
        )
    }
}
