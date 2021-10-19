import Taro from "@tarojs/taro"
import React, { Component } from "react"
import { AtButton, AtIcon } from "taro-ui"
import { View } from "@tarojs/components";

import { SwiperPosters } from "../../components/detail/swiper_posters"
import { GoodsSelection } from "../../components/at_radio/index"
import "./index.css"
import { Get } from "../../global-data/index"

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
            totalNum: 0,
        }
    };
    btnClick = (type) => {
        let num = this.state.totalNum;
        num = type === "add" ? (num += 1) : (num -= 1);
        if (num < 1) {
            num = 0;
        }
        let money = this.props.goodInfo.price;
        this.setState({
            totalNum: num,
            totalMoney: (money * num).toFixed(2),
        });
    };

    goHref = (type) => {
        switch (type) {
            case "01":
                Taro.navigateTo({
                    url: "/pages/home/index",
                });
                break;
            case "02":
                Taro.navigateTo({
                    url: "/pages/category/index",
                });
                break;
            case "03":
                Taro.navigateTo({
                    url: "/pages/cart/index",
                });
                break;
            case "04":
                Taro.navigateTo({
                    url: "/pages/order/index",
                });
                break;
            default:
                Taro.navigateTo({
                    url: "/pages/home/index",
                });
        }
    };
    render() {

        const postersImages = posters
        return (
            <View className="index">
                <View className="body">
                    <SwiperPosters images={postersImages} />
                    <View className="at-article__h1">
                        {Get("languages").goodsintroduction}
                    </View>
                    <GoodsSelection />
                </View>
                <View className="" id="bottomNavigation">
                    <View className="bottomIconWrap">
                        <View className="bottomIcon" id="firstpage" onClick={this.goHref.bind(this, "01")}>
                            <AtIcon className="icon" value="home" size="21" color="#666" />
                            <AtButton className="bottombutton" >
                                {Get('languages').home}
                            </AtButton>
                        </View>
                        <View className="bottomIcon" id="service" onClick={this.goHref.bind(this, "02")}>

                            <AtIcon className="icon" value="message" size="21" color="#666" />
                            <AtButton className="bottombutton">
                                {Get('languages').service}
                            </AtButton>
                        </View>
                        <View className="bottomIcon" id="goodscar" onClick={this.goHref.bind(this, "03")}>
                            <AtIcon className="icon" value="shopping-cart" size="21" color="#666" />
                            <AtButton className="bottombutton">
                                {Get("languages").goodscar}
                            </AtButton>
                        </View>
                    </View>
                    <View className="botBtnWrap">
                        <AtButton className="bottombutton2" onClick={this.btnClick.bind(this, "add")}>
                            {Get("languages").addcar}
                        </AtButton>
                        <AtButton className="bottombutton3" onClick={this.goHref.bind(this, "04")}>
                            {Get("languages").tobuy}
                        </AtButton>
                    </View>
                </View>
            </View>

        )
    }
};