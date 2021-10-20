import { AtButton, AtIcon } from "taro-ui"
import { View } from "@tarojs/components";
import React from "react"

import { Get } from "../../global-data/index"
import './index.css'
class Bottomdetail extends React.Component {
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

        return (
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
                <View className="botBtnWrap">
                    <AtButton className="bottombutton2" onClick={this.btnClick.bind(this, "add")}>
                        {Get("languages").addcar}
                    </AtButton>
                    <AtButton className="bottombutton3" onClick={this.goHref.bind(this, "04")}>
                        {Get("languages").tobuy}
                    </AtButton>
                </View>
            </View>
        )
    }
};
export {Bottomdetail}