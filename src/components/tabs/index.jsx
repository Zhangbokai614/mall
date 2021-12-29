import React from 'react'
import { View } from '@tarojs/components'

import './index.css'

import OrderCard from '../../components/order_card'
import { Get } from '../../global-data/index'

const text = Get('languages').user.order
const orderStateMap = Get('orderStateMap')

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kind: props.kind,
      selectKind: props.selectKind,
      content: props.content,
    }
  }

  async handleClick(value) {
    this.setState({
      selectKind: value
    })
  }

  render() {

    let tabsBar = this.state.kind.map((e, index) =>
      e === this.state.selectKind
        ? <View className='select' key={index} onClick={this.handleClick.bind(this, e)}>
          <View></View>
          {e}
          <View id='underscore'></View>
        </View>
        : <View className='unSelect' key={index} onClick={this.handleClick.bind(this, e)}>
          {e}
        </View>
    )

    const tabsContent = this.state.content.map((item, index) => {
      return (
        orderStateMap[item.order_state] == this.state.selectKind ||
          this.state.selectKind == text.allOrders ||
          this.state.selectKind == text.pendingReceipt && (item.order_state == '02' || item.order_state == '03')
          ? <OrderCard
            key={index + ''}
            orderInfo={item}
          />
          : null
      )
    })

    return (
      <View>
        <View id='tabs-bar'>
          {tabsBar}
        </View>
        {tabsContent}
      </View>
    )
  }
}

export { Tabs }