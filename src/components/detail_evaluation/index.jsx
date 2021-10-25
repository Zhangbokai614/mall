import { View } from "@tarojs/components"
import React from "react"
import { AtDivider } from "taro-ui"

import { Get } from "../../global-data/index"
import "./index.css"

class ProductEvaluation extends React.Component {

    render() {
        return (
            <View className="detailEvaluation">
                <View className="productEvaluation">
                    <View className='evaluationTitle'>
                        {Get("languages").goodsEvaluation}
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
                    {Get("languages").thePacking}
                </View>
                
            </View>
        )
    }
};
export { ProductEvaluation }