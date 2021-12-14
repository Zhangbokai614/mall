import React, { Component } from 'react';
import { View, Button } from '@tarojs/components';
import './index.css';

export default class index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      display: 'mask none',
      classstyle: 'box moveFromBottom',
    };
  }

  off() {
    this.setState({ display: 'mask none', classstyle: 'box moveFromBottom' });
  }

  open() {
    this.setState({ display: 'mask block', classstyle: 'box moveFromBottom showMove' });
  }

  render() {
    return (
      <>
        <Button onClick={this.open.bind(this)}>点击</Button>
        <View onClick={this.off.bind(this)} className={this.state.display}></View>
        <View className={this.state.classstyle}>v sdf sewf</View>
      </>
    );
  }
}
