import React from 'react'
import { View } from '@tarojs/components'

import './index.css'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kind: props.kind,
      selectKind: props.selectKind,
      content: props.content,
      loading: true
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

    return (
      <View id='tabsBar'>
        {tabsBar}
      </View>
    )
  }
}

export { Tabs }