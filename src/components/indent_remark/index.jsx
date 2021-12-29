import React, { Component } from 'react';
import { AtIcon } from 'taro-ui';
import { View, Text, Textarea } from '@tarojs/components';
import { Get } from '../../global-data';
import './index.css';

const text = Get('languages').indent.remark;

export default class Remark extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      display: 'mask none',
      classstyle: 'box none',
      text: '',
    };
    this.showText = '';
  }

  off() {
    this.setState({ display: 'mask none', classstyle: 'box none' });
  }

  open() {
    this.setState({ display: 'mask block', classstyle: 'box block' });
  }

  changeText() {
    this.off();
    this.showText = this.state.text;
  }

  render() {
    return (
      <View>
        <View onClick={this.open.bind(this)} className='indent-remark-levelOne'>
          <Text className='indent-remark-levelOne-text-one'>{text.postscript}</Text>
          <Text className='indent-remark-levelOne-text-two'>
            {this.showText.length === 0 ? text.hint : this.showText}
          </Text>
          <AtIcon className='indent-remark-chevron-right' value='chevron-right' size='18'></AtIcon>
        </View>
        <View onClick={this.off.bind(this)} className={this.state.display}></View>
        <View className={this.state.classstyle}>
          <View className='indent-remark-box-top indent-remark-box-top-border'>
            <View className='indent-remark-box-top-one'>
              <Text>{text.addANote}</Text>
            </View>
            <View className='indent-remark-box-top-two'>
              <Textarea
                className='indent-remark-textarea'
                onInput={(e) => {
                  this.setState({ text: e.detail.value });
                }}
              ></Textarea>
            </View>
          </View>
          <View className='indent-remark-box-bottom'>
            <View
              onClick={this.off.bind(this)}
              className='indent-remark-box-bottom-left indent-remark-box-bottom-left-border '
            >
              <Text>{text.cancel}</Text>
            </View>
            <View onClick={this.changeText.bind(this)} className='indent-remark-box-bottom-right'>
              <Text>{text.confirm}</Text>
            </View>
          </View>
          <View></View>
        </View>
      </View>
    );
  }
}

export { Remark };
