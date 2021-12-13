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

      <View className='bottom'>
        <button
          className='bottomLeftHome'
          id='firstpage'
          onClick={this.goHref.bind(this, '01')}>
          <View className='bottonLeft'>
            <Image
              src={home}
              className='imageHome'
              style='width:5vw; height:5vw;'
            />
            <View className='detailHome' >
              {Get('languages').detailPage.home}
            </View>
          </View>
        </button>
        <button
          className='bottomLeftService'
          open-type="contact"
          bindcontact="handleContact"
        >
          <View className='bottonLeft'>
            <Image
              src={service}
              className='imageService'
              style='width:5vw; height:5vw;'
            />
            <View className='detailService'>
              {Get('languages').detailPage.customerService}
            </View>
          </View>
        </button>
        <button
          className='bottomLeftGoodscar'
          id='goodscar'
          onClick={this.goHref.bind(this, '03')}
        >
          <View className='bottonLeft'>
            <Image
              src={shoppingcar}
              className='imageGoodscar'
              style='width:5vw; height:5vw;'
            />
            <View className='detailGoodscar'>
              {Get('languages').detailPage.goodscar}
            </View>
          </View>
        </button>
        <View className='bottomRight'>
          <AtButton
            className='bottombuttonCar'
            onClick={this.goHref.bind(this, '03')}
          >
            {Get('languages').detailPage.addcar}
          </AtButton>
          <AtButton
            className='bottombuttonTobuy'
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