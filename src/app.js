import { Component } from 'react'
import './app.css'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return this.props.children
  }
}

export default App
