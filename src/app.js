import { Component } from 'react'
import './app.css'
import 'taro-ui/dist/style/index.scss'
import "taro-color-ui/dist/style/index.scss"
import './style/taro-ui.css'

import { Set } from './global-data/index'
import languages from './asset/languages/zn-cn.json'

class App extends Component {
  componentWillMount() {
    Set('languages', languages)
  }

  render() {
    return this.props.children
  }
}

export default App
