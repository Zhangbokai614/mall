import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import { AtIcon } from 'taro-ui';
import { View, Text } from '@tarojs/components';
import { Get } from '../../global-data';
import './index.css';

const text = Get('languages').indent.address;

class ShippingAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: new Object(),
    };
  }

  address() {
    Taro.chooseAddress({
      success: (res) => {
        this.setState({
          address: {
            userName: res.userName,
            postalCode: res.postalCode,
            provinceName: res.provinceName,
            cityName: res.cityName,
            countyName: res.countyName,
            detailInfo: res.detailInfo,
            nationalCode: res.nationalCode,
            telNumber: res.telNumber,
          },
        });
      },
    });
    this.setState({});
  }

  render() {
    const unselected = <View>{text.ChooseWeChatDeliveryAddress}</View>;
    const selected = (
      <View className='indent-address-text-user'>
        <Text className='indent-address-text-one'>
          {this.state.address.userName + ' ' + this.state.address.telNumber}
        </Text>
        <Text>
          {this.state.address.provinceName +
            this.state.address.cityName +
            this.state.address.countyName +
            this.state.address.detailInfo}
        </Text>
      </View>
    );
    return (
      <>
        <View className='indent-address-levelOne' onClick={this.address.bind(this)}>
          <AtIcon className='indent-address-map-pin' value='map-pin' size='25'></AtIcon>
          {Object.keys(this.state.address).length === 0 ? unselected : selected}
          <AtIcon className='indent-address-chevron-right' value='chevron-right' size='18'></AtIcon>
        </View>
      </>
    );
  }
}

export { ShippingAddress };
