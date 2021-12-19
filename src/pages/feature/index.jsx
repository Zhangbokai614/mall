import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View , Image} from '@tarojs/components'

import { Get } from '../../global-data/index'
import * as homeApi from './service'

import './index.css'

export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
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
        const features = await homeApi.features()
        this.setState({
            title: features.data[0].title,
            time: features.data[0].time,
            images: features.data[0].images,
            loading: false,
        })
        Taro.hideLoading()
    }

    render() {

        const title = this.state.title
        const time = this.state.time
        const images = this.state.images
        return (
            this.state.loading
            ? null
            : <View>
                <View className='title'>
                    {title}
                </View>
                <View className='time at-article__info'>
                    {time}
                </View>
                <View className='images'>
                   <Image
                   src={images[0]}
                   style='width: 100vw; height:100vw'
                   />
                </View>
                <View className='intro'>
                {Get('languages').feature.firstIntro}
                </View>
                <View className='images'>
                    <Image
                    src={images[1]}
                    style='width: 100vw; height:100vw'
                    />
                </View>
                <View className='intro'>
                {Get('languages').feature.secondIntro}
                </View>
                <View className='images'>
                    <Image
                    src={images[2]}
                    style='width: 100vw; height:100vw'
                    />
                </View>
                <View className='intro'>
                {Get('languages').feature.thirdIntro}
                </View>
            </View>
        )
    }

};