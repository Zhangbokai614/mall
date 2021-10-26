import React from 'react'
import { View } from '@tarojs/components'

import { GoodsCard } from '../goods_card/index'
import './index.css'

class GoodsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listInfo: this.props.listInfo,
            selectKey: Object.keys(this.props.listInfo)[0],
        }
    }

    handleClick(value) {
        this.setState({
            selectKey: value
        })
    }

    render() {
        const info = this.state.listInfo[this.state.selectKey]
        const tabList = Object.keys(this.state.listInfo)

        let tabsBar = tabList.map((e, index) =>
            e === this.state.selectKey
                ? <View className='select' key={index} onClick={this.handleClick.bind(this, e)}>
                    <View></View>
                    {e}
                    <View id='underscore' ></View>
                </View>
                : <View className='unSelect' key={index} onClick={this.handleClick.bind(this, e)}>
                    {e}
                </View>
        )

        const tabrContent = (
            info.map((e) => {
                return (
                    <GoodsCard
                        key={e.id}
                        id={e.id}
                        focus={e.focus}
                        title={e.title}
                        imageSrc={e.images}
                        price={e.price}
                        marketPrice={e.marketPrice}
                        type={this.state.selectKey}
                    />
                )
            })
        )

        return (
            <View>
                <View id='tabsBar'>
                    {tabsBar}
                </View>
                <View id='cardList'>
                    {tabrContent}
                </View>
            </View>
        )
    }
}

export { GoodsList }