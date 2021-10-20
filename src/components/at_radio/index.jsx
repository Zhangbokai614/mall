import { View } from '@tarojs/components'
import React from "react"
import { AtButton, AtFloatLayout, AtRadio } from "taro-ui"

import { Get } from "../../global-data/index"
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
                    <AtButton className="button" onClick={this.handleClickSelect.bind(this)}>{Get("languages").select}</AtButton>
                    <AtFloatLayout isOpened={this.state.atButtonSelect} onClose={this.handleClickSelect.bind(this)} title={Get("languages").goodsSelection}>
                        <AtRadio
                            options={[
                                { label: "", value: "option1", },
                                { label: "", value: "option2", },
                                { label: "", value: "option3", }
                            ]}
                            value={this.state.select}
                            onClick={this.handleChangeSelect.bind(this)}
                        />
                        <AtButton className="goodscar" circle="true" onClick={this.goHref.bind(this, "01")}>{Get("languages").addcar}</AtButton>
                        <AtButton className="confirm" circle="true" onClick={this.goHref.bind(this, "04")}>{Get("languages").tobuy}</AtButton>
                    </AtFloatLayout>
                </View>
                <View className="distribution">
                    <AtButton className="button" onClick={this.handleClickDistribution.bind(this)}>{Get("languages").distribution}</AtButton>
                    <AtFloatLayout isOpened={this.state.atButtonDistribution} onClose={this.handleClickDistribution.bind(this)} title={Get("languages").deliveryTo}>
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
                    <AtButton className="button" onClick={this.handleClickService.bind(this)}>{Get("languages").service}</AtButton>
                    <AtFloatLayout isOpened={this.state.atButtonService} onClose={this.handleClickService.bind(this)} title={Get("languages").deliveryTo}>
                        <AtRadio
                            options={[
                                { label: "", value: "option1", },
                                { label: "", value: "option2", }
                            ]}
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