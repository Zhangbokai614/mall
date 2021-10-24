import { View, Image, Text } from '@tarojs/components'
import React from "react"
import { AtButton, AtListItem, AtFloatLayout, AtRadio, AtList } from "taro-ui"

import { Get } from "../../global-data/index"
import Fruit from "../../asset/images/icon/fruit.png"
import FreeMoney from "../../asset/images/icon/free.png"
import SevenDays from "../../asset/images/icon/seven-days.png"
import "./index.css"

class GoodsSelection extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            atButtonSelect: false,
            atButtonDistribution: false,
            atButtonService: false,
            select: "",
            distribution: "",
            service: "",
        }
    };

    handleChangeSelect(select) {
        this.setState({
            select
        })
    };

    handleClickSelect() {
        this.state.atButtonSelect
            ? this.setState({
                atButtonSelect: false,
            })
            : this.setState({
                atButtonSelect: true,
            })
    };

    handleChangeDistribution(distribution) {
        this.setState({
            distribution
        })
    };

    handleClickDistribution() {
        this.state.atButtonDistribution
            ? this.setState({
                atButtonDistribution: false,
            })
            : this.setState({
                atButtonDistribution: true,
            })
    };

    handleChangeService(service) {
        this.setState({
            service
        })
    };

    handleClickService() {
        this.state.atButtonService
            ? this.setState({
                atButtonService: false,
            })
            : this.setState({
                atButtonService: true,
            })
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
            <View className="atradio">
                <View className="goodsSelection">
                    <AtList>
                        <AtListItem
                            className="radioList"
                            title={Get("languages").select}
                            onClick={this.handleClickSelect.bind(this)}
                            arrow="right" />
                        <AtFloatLayout
                            isOpened={this.state.atButtonSelect}
                            onClose={this.handleClickSelect.bind(this)}
                            title={Get("languages").goodsSelection}>
                            <AtRadio
                                options={[
                                    { label: "", value: "option1", },
                                    { label: "", value: "option2", },
                                    { label: "", value: "option3", }
                                ]}
                                value={this.state.select}
                                onClick={this.handleChangeSelect.bind(this)}
                            />
                            <AtButton
                                className="goodscar"
                                circle="true"
                                onClick={this.goHref.bind(this, "01")}
                            >
                                {Get("languages").addcar}
                            </AtButton>
                            <AtButton
                                className="confirm"
                                circle="true"
                                onClick={this.goHref.bind(this, "04")}
                            >
                                {Get("languages").tobuy}
                            </AtButton>
                        </AtFloatLayout>
                    </AtList>
                </View>
                <View className="distribution">
                    <AtListItem
                        className="radioList"
                        title={Get("languages").distribution}
                        onClick={this.handleClickDistribution.bind(this)}
                        arrow="right"
                    />
                    <AtFloatLayout
                        isOpened={this.state.atButtonDistribution}
                        onClose={this.handleClickDistribution.bind(this)}
                        title={Get("languages").deliveryTo}
                    >
                        <AtRadio
                            options={[
                                { label: "", value: "option1", },
                                { label: "", value: "option2", }
                            ]}
                            value={this.state.distribution}
                            onClick={this.handleChangeDistribution.bind(this)}
                        />
                    </AtFloatLayout>
                </View>
                <View className="service">
                    <View
                        className="serviceList"
                        onClick={this.handleClickService.bind(this)}
                    >
                        <View className="textService">
                            <Text >
                                {Get("languages").service}
                            </Text>
                        </View>

                        <Image
                            className="imageFruit"
                            src={Fruit}
                            style="width:20px; height:20px;"
                        />
                        <View className="serviceDetail">
                            {Get("languages").compensation}
                            </View>   
                        <Image
                            className="imageFree"
                            src={FreeMoney}
                            style="width:20px; height:20px;"
                        />
                        <View className="serviceDetail">
                            {Get("languages").freeMoney}
                        </View>
                        <Image
                            className="imageSevenDays"
                            src={SevenDays}
                            style="width:22px; height:22px;"
                        />
                        <View className="serviceDetail">
                            {Get("languages").returnGoods}
                        </View>
                    </View>
                    <AtFloatLayout
                        isOpened={this.state.atButtonService}
                        onClose={this.handleClickService.bind(this)}                 
                    >
                        <AtRadio
                            value={this.state.service}
                            onClick={this.handleChangeService.bind(this)}
                        />
                    </AtFloatLayout>
                </View>
            </View>
        )
    }
};
export { GoodsSelection }