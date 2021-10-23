import { View } from "@tarojs/components"
import React from "react"
import Taro from "@tarojs/taro"
import { AtDivider } from "taro-ui"

import { Get } from "../../global-data/index"
import "./index.css"

class Specification extends React.Component {

    render() {
        return (
            <View className="topClass">
                <View className="goodsSpecification">
                    <View >
                        {Get("languages").goodsSpecification}
                    </View>
                </View>
                <AtDivider />
                <View className="">
                    {Get("languages").goodsId}
                </View>
            </View>
        )
    }
};
export { Specification }