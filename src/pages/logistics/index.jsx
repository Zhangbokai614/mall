import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { CuTimeline } from "taro-color-ui";

import { Get } from '../../global-data/index'

import * as waybillApi from './service';

import './index.css'

const orderStateMap = Get('orderStateMap')

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderCode: getCurrentInstance().router.params.orderCode,
      loading: true
    }
  }

  componentDidShow() {
    this.loading()
  }

  async loading() {
    Taro.showLoading({
      title: Get('languages').loading,
    })

    const accessToken = Taro.getStorage({
      key: 'accessToken',
      success: (res) => {
        return res
      }
    })

    const data = {
      orderCode: this.state.orderCode,
      accessToken: accessToken.data,
    }

    const orderPath = await waybillApi.orderPath(data)

    await this.setState({
      orderPath: orderPath.data[0],
      loading: false,
    })

    Taro.hideLoading()
  }

  render() {
    let orderState = this.state.loading ? null : this.state.orderPath.order_state
    let path = this.state.loading ? null : this.state.orderPath.path_item_list.map((item, index) => {
      const actionTime = new Date(item.action_time)
      return (
        <CuTimeline.Item
          key={index}
          shadow
          color="#FF4949"
          left={
            <View className='timeline-item_circle'/>
          }>
          <View style={{ color: "#FFFFFF" }}>
            <View>
              {
                ('0' + (actionTime.getMonth() + 1)).slice(-2) + '-' +
                ('0' + actionTime.getDate()).slice(-2) + " " +
                ('0' + actionTime.getHours()).slice(-2) + ":" +
                ('0' + actionTime.getMinutes()).slice(-2)
              }
            </View>
            <View>{item.action_msg}</View>
          </View>
        </CuTimeline.Item>
      )
    }).reverse()

    return (
      this.state.loading
        ? null
        : <View>
          <View id='order-state' className={orderState == '04' ? 'order-state--green' : 'order-state--red'}>
            {orderStateMap[orderState]}
          </View>
          <View className='card waybill-info'>
            <View className='waybill-info_item'>
              {this.state.orderPath.delivery_name}
            </View>
            <View className='waybill-info_item'>
              {this.state.orderPath.waybill_id}
            </View>
          </View>
          <View className='timeline-card card'>
            <CuTimeline>
              {path}
            </CuTimeline>
          </View>
        </View>
    )
  }
}
