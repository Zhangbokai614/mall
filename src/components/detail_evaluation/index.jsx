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
                    <View className='evaluationTitle'>
                        {Get("languages").goodsEvaluation}
                    </View>
                </View>
                <AtDivider />
                <View className='starsdetail'>
                    <View>
                        <View className="evaluationdetail">
                            {Get("languages").goodsEvaluation}
                        </View>
                    </View>
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <View className="score">
                        5.0
                    </View>
                </View>
                <View className='starsdetail'>
                    <View>
                        <View className="evaluationdetail">
                            {Get("languages").serviceAttitude}
                        </View>
                    </View>
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <View className="score">
                        5.0
                    </View>
                    <View>
                    </View>
                </View>
                <View className='starsdetail'>
                    <View>
                        <View className="evaluationdetail">
                            {Get("languages").deliverySpeed}
                        </View>
                    </View>
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <View className="score">
                        5.0
                    </View>
                </View>
                <View className='starsdetail'>
                    <View>
                        <View className="evaluationdetail">
                            {Get("languages").logisticsSpeed}
                        </View>
                    </View>
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <View className="score">
                        5.0
                    </View>
                </View>
                <View className='starsdetail'>
                    <View>
                        <View className="evaluationdetail">
                            {Get("languages").thePacking}
                        </View>
                    </View>
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <AtIcon className="starInterval" value='star-2' color='red' size='17' />
                    <View className="score">
                        5.0
                    </View>
                </View>
            </View>
        )
    }
};
export { ProductEvaluation }