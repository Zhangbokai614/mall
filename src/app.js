import { Component } from 'react'
import './app.css'
import 'taro-ui/dist/style/index.scss'
import './style/taro-ui.css'

class App extends Component {

  render () {
    return this.props.children
  }
}

export default App
