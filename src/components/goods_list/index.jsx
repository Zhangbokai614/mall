import React from 'react'
import { View } from '@tarojs/components'
import { CuTabs } from "taro-color-ui";

import { GoodsCard } from '../goods_card/index'
import './index.css'

class GoodsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listInfo: this.props.listInfo,
        }
    }

    render() {
        const info = this.state.listInfo
        const type = Object.keys(info)
        let key = 0
        let tabList = []

        const cardList = type.map((t, index) => {
            tabList.push({ title: t, key: index + '' })
            return (
                <View id='cardList' key={index + ''}>
                    {
                        info[t].map((e) => {
                            key += 1
                            return (
                                <GoodsCard
                                    key={key}
                                    focus={e.focus}
                                    title={e.title}
                                    imageSrc={e.images}
                                    price={e.price}
                                    marketPrice={e.marketPrice}
                                />
                            )
                        })
                    }
                </View>
            )
        })

        return (
            <CuTabs
                tabs={tabList}
                color="#434343"
                activeColor="#ff4949"
                scroll='true'
            >
                {cardList}
            </CuTabs>
        )
    }
}

export { GoodsList }