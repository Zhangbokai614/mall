import { Component } from 'react'
import Taro from '@tarojs/taro'

import './app.css'
import 'taro-ui/dist/style/index.scss'
import "taro-color-ui/dist/style/index.scss"
import './style/taro-ui.css'

import { Set } from './global-data/index'
import languages from './asset/languages/zn-cn.json'

class App extends Component {

  componentWillMount() {
    Set('languages', languages)

    try {
      const res = Taro.getSystemInfoSync()

      Set('windowHeight', res.windowHeight)
      Set('windowWidth', res.windowWidth)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return this.props.children
  }
}

export default App
