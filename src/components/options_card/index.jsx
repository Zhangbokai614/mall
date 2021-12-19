import React from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtIcon } from 'taro-ui'

import './index.css'

class OptionsCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      headNavigate: this.props.headNavigate,
      headNavigateText: this.props.headNavigateText,
      headNavigatePath: this.props.headNavigatePath,
      content: this.props.content
    }
  }

  headHandleClick() {
    Taro.navigateTo({
      url: this.state.headNavigatePath
    })
  }

  optionHandleClick(index) {
    Taro.navigateTo({
      url: this.state.content[index].path
    })
  }

  render() {
    const cardContent = this.state.content === undefined ? null : this.state.content.map((e, index) => {
      const func = e.func || false
      return (
        e.contact
          ? <View key={index} onClick={func ? func.bind(this) : this.optionHandleClick.bind(this, index)}>
            <button id='contact-button' className='option' size='mini' open-type="contact">
              <Image
                className='option-icon'
                src={e.icon}
                mode='aspectFit'
              />
            </button>
            <View>
              {e.text}
            </View>
          </View>
          : <View className='option' key={index} onClick={func ? func.bind(this) : this.optionHandleClick.bind(this, index)}>
            <Image
              className='option-icon'
              src={e.icon}
              mode='aspectFit'
            />
            <View>
              {e.text}
            </View>
          </View>
      )
    })

    return (
      <View id='options-card'>
        <View id='card-head'>
          <View>
            {this.state.title}
          </View>
          {
            this.state.headNavigate
              ? <View className='head-navigate-text' onClick={this.headHandleClick.bind(this)}>
                {this.state.headNavigateText}
                <AtIcon value='chevron-right' size='12' color='#000'></AtIcon>
              </View>
              : null
          }
        </View>
        <View id='card-content'>
          {cardContent}
        </View>
      </View>
    )
  }
}

export { OptionsCard }