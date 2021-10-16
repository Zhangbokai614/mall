import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { AtButton, AtFloatLayout, AtRadio, AtIcon } from 'taro-ui'
import { View } from '@tarojs/components';

import { SwiperPosters } from '../../components/detail/swiper_posters'
import './index.css'
import { Get } from '../../global-data/index'

const posters = [
    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1633323146590-assets/web-upload/df14984d-9593-4756-ad22-e2cd0fe3c020.jpeg",
    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1633323146770-assets/web-upload/32f3755c-546c-4271-a80b-b92411cc9a0d.jpeg",
    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1633323146811-assets/web-upload/fe162239-eaac-4a52-aea4-41dab5655f18.jpeg",
    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1633323146803-assets/web-upload/a4bc4a99-7e76-4acb-a2d8-53abd84e18b2.jpeg",
    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1633323147669-assets/web-upload/a988079f-d135-481f-aa18-2a495d8e3edf.jpeg"
]

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            atButton: false,

        }

    };
    btnClick = (type) => {
        let num = this.state.totalNum;
        num = type === 'add' ? (num += 1) : (num -= 1);
        if (num < 1) {
            num = 0;
        }
        let money = this.props.goodInfo.price;
        this.setState({
            totalNum: num,
            totalMoney: (money * num).toFixed(2),
        });
    };
    handleChange(value) {
        this.setState({
            value
        })
    };
    handleClick() {
        this.setState({
            atButton: true,
        })
    };
    goHref = (type) => {
        switch (type) {
            case '01':
                Taro.switchTab({
                    url: '/pages/index/index',
                });
                break;
            case '02':
                Taro.switchTab({
                    url: '/pages/category/index',
                });
                break;
            case '03':
                this.setStore();
                Taro.switchTab({
                    url: '/pages/cart/index',
                });
                break;
            case '04':
                this.setStore();
                Taro.navigateTo({
                    url: '/pages/order/index',
                });
                break;
            default:
                Taro.switchTab({
                    url: '/pages/index/index',
                });
        }
    };
    On() {
        console.log('xxxs')
        Taro.navigateTo({
            url: '/pages/index/index',
        })
    };
    render() {

        const postersImages = posters
        return (
            <View className='index'>
                <SwiperPosters images={postersImages} />
                <View className='at-article__h1'>
                {Get('languages').goodsintroduction}
                </View>
                <AtButton className='at-col at-col-2' onClick={this.handleClick.bind(this)}>{Get('languages').selecte}</AtButton>
                <AtFloatLayout isOpened={this.state.atButton} title={Get('languages').goodsselection}>
                    <AtRadio
                        options={[
                            { label: '', value: 'option1', },
                            { label: '', value: 'option2', },
                            { label: '', value: 'option3', }
                        ]}
                        value={this.state.value}
                        onClick={this.handleChange.bind(this)}
                    />
                    <AtButton className='goodscar' circle="true" onClick={this.On.bind(this)}>{Get('languages').addcar}</AtButton>
                    <AtButton className='confirm' circle="true" onClick={this.On.bind(this)}>{Get('languages').tobuy}</AtButton>
                </AtFloatLayout>
                <View className="" id ="m">
                    <View className="bottomIconWrap ">
                        <View className="bottomIcon" id="n">
                            <AtButton className="firstpage" id="d">
                            {Get('languages').home}
                            </AtButton>
                            <AtIcon value="home" size="21" color="#666" onClick={this.goHref.bind(this, '01')} />
                        </View>
                        <View className="bottomIcon" onClick={this.goHref.bind(this, '02')}>
                            <AtButton className="service">
                            {Get('languages').service}
                            </AtButton>
                            <AtIcon value="message" size="21" color="#666" />
                        </View>
                        <View className="bottomIcon" onClick={this.goHref.bind(this, '03')}>
                            <AtButton className="bottomIcon">
                            {Get('languages').goodscar}
                            </AtButton>
                            <AtIcon value="shopping-cart" size="21" color="#666" />
                        </View>
                    </View>
                    <View className="botBtnWrap">
                        <AtButton className="addToCar" onClick={this.btnClick.bind(this, 'add')}>
                        {Get('languages').addcar}
                        </AtButton>
                        <AtButton className="goPay" onClick={this.goHref.bind(this, '04')}>
                        {Get('languages').tobuy}
                        </AtButton>
                    </View>
                </View>
            </View>

        )
    }
};