import { AtButton } from 'taro-ui'
import { View, Image } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Get } from '../../global-data/index'
import shoppingcar from '../../asset/images/icon/detail-shopping-cart.png'
import home from '../../asset/images/tabs/home-select.png'
import service from '../../asset/images/icon/detail-customer-service-select.png'
import './index.css'
class Bottomdetail extends React.Component {

  goHref = (type) => {
    switch (type) {
      case '01':
        Taro.reLaunch({
          url: '/pages/home/index',
        });
        break;
      case '02':
        Taro.navigateTo({
          url: '/pages/category/index',
        });
        break;
      case '03':
        Taro.reLaunch({
          url: '/pages/cart/index?',
        });
        break;
      case '04':
        Taro.navigateTo({
          url: '/pages/order/index',
        });
        break;
      default:
        Taro.navigateTo({
          url: '/pages/home/index',
        });
    }
  };

  render() {

    return (

      <View className='main-bottom'>
        <AtButton
          className='bottom-home'
          onClick={this.goHref.bind(this, '01')}>
          <View className='bottom-container-left'>
            <Image
              className='bottom-container-avatar'
              src={home}
              style='width:5vw; height:5vw;'
            />
            <View className='container-left-title' >
              {Get('languages').detailPage.home}
            </View>
          </View>
        </AtButton>
        <AtButton
          className='bottom-service'
          open-type="contact"
          bindcontact="handleContact"
        >
          <View className='bottom-container-left'>
            <Image
              className='bottom-container-avatar'
              src={service}
              style='width:5vw; height:5vw;'
            />
            <View className='container-left-title'>
              {Get('languages').detailPage.customerService}
            </View>
          </View>
        </AtButton>
        <AtButton
          className='bottom-goodscar'
          onClick={this.goHref.bind(this, '03')}
        >
          <View className='bottom-container-left'>
            <Image
              className='bottom-container-avatar'
              src={shoppingcar}
              style='width:5vw; height:5vw;'
            />
            <View className='container-left-title'>
              {Get('languages').detailPage.goodscar}
            </View>
          </View>
        </AtButton>
        <View className='bottom-container-right'>
          <AtButton
            className='bottom-right-car'
            onClick={this.goHref.bind(this, '03')}
          >
            {Get('languages').detailPage.addcar}
          </AtButton>
          <AtButton
            className='bottom-right-tobuy'
            onClick={this.goHref.bind(this, '04')}
          >
            {Get('languages').detailPage.tobuy}
          </AtButton>
        </View>
      </View>

    )
  }
};
export { Bottomdetail }