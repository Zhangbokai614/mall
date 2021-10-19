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
                            title={e.title}
                            imageSrc={e.images}
                            price={e.price}
                            marketPrice={e.marketPrice}
                            inventory={e.inventory}
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
                            title={e.title}
                            imageSrc={e.images}
                            price={e.price}
                            marketPrice={e.marketPrice}
                            inventory={e.inventory}
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
                        className='card'
                        style='width: 100%;background: #fff;'
                        src={this.state.posters}
                        mode='widthFix'
                    />

                    <View id='activitys'>
                        <Image
                            id='activity'
                            className='card'
                            style='width: 96%;background: #fff;'
                            src={this.state.activity}
                            mode='widthFix'
                        />
                        {FocusList}
                    </View>

                    <View id='cardList'>
                        {CardList}
                    </View>
                </View>
        )
    }
}
