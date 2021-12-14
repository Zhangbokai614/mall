import { Component } from 'react'
import Taro from '@tarojs/taro'

import './app.css'
import 'taro-ui/dist/style/index.scss'
import "taro-color-ui/dist/style/index.scss"
import './style/taro-ui.css'

import { Set } from './global-data/index'
import languages from './asset/languages/zn-cn.json'

class App extends Component {

  componentDidShow() {
    Set('languages', languages)
    Set('orderStateMap', {
      "01": languages.user.order.pendingPayment,
      "02": languages.user.order.pendingShipments,
      "03": languages.user.order.pendingReceipt,
      "04": languages.user.order.completed,
      "06": languages.user.order.returnExchange,
    })

    Taro.checkSession({
      success: function () {
      },
      fail: this.login()
    })
  }

  login() {
    Taro.login({
      success: function (res) {
        if (res.code) {
          Taro.request({
            method: 'POST',
            url: 'http://192.168.0.46:8000/api/v1/user/login',
            data: {
              code: res.code
            },
            success: (res) => {
              console.log(res)
              Taro.setStorage({
                key: "userToken",
                data: res.data.token
              })
            },
          })
        } else {
          console.log(res.errMsg)
        }
      }
    })
  }

  render() {
    return this.props.children
  }
}

export default App
