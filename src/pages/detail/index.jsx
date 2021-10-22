import React, { Component } from "react"
import { View } from "@tarojs/components"

import { SwiperPosters } from "../../components/detail/swiper_posters"
import { GoodsSelection } from "../../components/at_radio/index"
import { Bottomdetail } from "../../components/detail_bottom/index"
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


    render() {

        const postersImages = posters
        return (
            <View className="index">
                <View >
                    <SwiperPosters images={postersImages} />
                    <View className="at-article__h1">
                        {Get("languages").goodsintroduction}
                    </View>
                    <GoodsSelection />
                </View>
                <View>
                    {/* goodsSpecifications 
                        goodsEvaluation
                    */}
                </View>
              
                <Bottomdetail/>
           
            </View>

        )
    }
};