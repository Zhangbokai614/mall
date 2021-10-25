import { View } from "@tarojs/components"
import React from "react"
import { AtDivider, AtIcon } from "taro-ui"

import { Get } from "../../global-data/index"
import "./index.css"

class ProductEvaluation extends React.Component {

    render() {
        return (
            <View className="detailEvaluation">
                <View className="productEvaluation">
                    <View >
                        {Get("languages").productEvaluation}
                    </View>
                </View>
                <AtDivider />
                <View className="evaluationdetail">
                    {Get("languages").goodsEvaluation}
                </View>
                <View className="evaluationdetail">
                    {Get("languages").serviceAttitude}
                </View>
                <View className="evaluationdetail">
                    {Get("languages").deliverySpeed}
                </View>
                <View className="evaluationdetail">
                    {Get("languages").logisticsSpeed}
                </View>
                <View className="evaluationdetail">
                    {Get("languages").wthePackingeight}
                </View>
                
            </View>
        )
    }
};
export { ProductEvaluation }