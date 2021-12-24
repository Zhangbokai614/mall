import React from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtIcon } from 'taro-ui'

import './index.css'

function headHandleClick(path) {
  Taro.navigateTo({
    url: path
  })
}

function OptionsCard(props) {
  const { title, headNavigate, headNavigateText, headNavigatePath, content } = props

  const cardContent = content === undefined ? null : content.map((e, index) => {
    const func = e.func || false
    return (
      e.contact
        ? <View key={index} onClick={func ? func.bind(this) : headHandleClick.bind(this, content[index].path)}>
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
        : <View className='option' key={index} onClick={func ? func.bind(this) : headHandleClick.bind(this, content[index].path)}>
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
          {title}
        </View>
        {
          headNavigate
            ? <View className='head-navigate-text' onClick={headHandleClick.bind(this, headNavigatePath)}>
              {headNavigateText}
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

export default OptionsCard