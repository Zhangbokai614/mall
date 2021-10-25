import { View } from "@tarojs/components"
import React from "react"
import { AtDivider } from "taro-ui"

import { Get } from "../../global-data/index"
import "./index.css"

class Specification extends React.Component {

    render() {
        return (
            <View className="detailSpecification">
                <View className="goodsSpecification">
                    <View >
                        {Get("languages").goodsSpecification}
                    </View>
                </View>
                <AtDivider />
                <View className="goodsDetaiInfo">
                    {Get("languages").goodsId}
                </View>
                <View className="goodsDetaiInfo">
                    {Get("languages").productionLicense}
                </View>
                <View className="goodsDetaiInfo">
                    {Get("languages").productNumber}
                </View>
                <View className="goodsDetaiInfo">
                    {Get("languages").shelfLife}
                </View>
                <View className="goodsDetaiInfo">
                    {Get("languages").weight}
                </View>
                
            </View>
        )
    }
};
export { Specification }