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
        const info = this.state.listInfo
        const tabList = Object.keys(info)

        const tabsBar = tabList.map((e, index) =>
            e === this.state.selectKey
                ? <View className='select' key={index} onClick={this.handleClick.bind(this, e)}>
                    <View></View>
                    {e}
                    <View id='underscore' ></View>
                </View>
                : <View className='' key={index} onClick={this.handleClick.bind(this, e)}>
                    {e}
                </View>
        )

        const tabrContent = (
            info[this.state.selectKey].map((e, index) => {
                return (
                    <GoodsCard
                        key={index}
                        id={e.id}
                        focus={e.focus}
                        title={e.title}
                        imageSrc={e.images}
                        price={e.price}
                        inventory={e.inventory}
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