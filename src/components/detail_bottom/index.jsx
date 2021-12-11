import { AtButton } from 'taro-ui'
import { View, Image } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Get } from '../../global-data/index'
import shoppingcar from '../../asset/images/icon/detail-shopping-cart.png'
import home from '../../asset/images/tabs/home-select.png'
import service from '../../asset/images/icon/customer-service.png'
import './index.css'
class Bottomdetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalNum: 0,
      home: false,
      shoppingcar: false,
      service: false,
      id: this.props.id,
      type: this.props.type
    }
  };

  handeChangeShoppingcar() {
    this.setState({
      shoppingcar: !this.state.shoppingcar
    })
  };

  btnClick = (type) => {
    let num = this.state.totalNum;
    num = type === 'add' ? (num += 1) : (num -= 1);
    if (num < 1) {
      num = 0;
    }
    let money = this.props.goodInfo.price;
    this.setState({
      totalNum: num,
      totalMoney: (money * num).toFixed(2),
    });
  };

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
          url: '/pages/cart/index?id=',
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
              onClick={this.handeChangeShoppingcar.bind(this)}
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
            onClick={this.btnClick.bind(this, 'add')}
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