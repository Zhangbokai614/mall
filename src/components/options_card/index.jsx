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
      return (
        <View className='option' key={index} onClick={this.optionHandleClick.bind(this, index)}>
          <Image
            className='optionIcon'
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
      <View id='optionsCard'>
        <View id='cardHead'>
          <View>
            {this.state.title}
          </View>
          {
            this.state.headNavigate
              ? <View className='headNavigateText' onClick={this.headHandleClick.bind(this)}>
                {this.state.headNavigateText}
                <AtIcon value='chevron-right' size='12' color='#000'></AtIcon>
              </View>
              : null
          }
        </View>
        <View id='cardContent'>
          {cardContent}
        </View>
      </View>
    )
  }
}

export { OptionsCard }