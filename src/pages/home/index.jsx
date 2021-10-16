import React, { Component } from 'react'
import { View } from '@tarojs/components'

import { AtTabs, AtTabsPane, AtNoticebar } from 'taro-ui'

import * as homeApi from './service';
import './index.css'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      goodsInfo: {},
      noticebar: ''
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  async componentWillMount() {
    const goodsinfo = await homeApi.goodsInfo()
    const noticebar = await homeApi.noticebarText()
    this.setState({
      goodsInfo: goodsinfo.data,
      noticebar: noticebar.data
    })
  }

  render() {
    return (
      <View>
        <AtNoticebar marquee icon='volume-plus'>
          {this.state.noticebar}
        </AtNoticebar>
        <AtTabs
          current={this.state.current}
          scroll
          tabList={[
            { title: '标签页1' },
            { title: '标签页2' },
            { title: '标签页3' },
            { title: '标签页4' },
            { title: '标签页5' },
            { title: '标签页6' }
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
