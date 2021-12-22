import { View, Image } from '@tarojs/components'
import React from 'react'
import { AtIcon, AtList, } from 'taro-ui'

import { Get } from '../../global-data/index'
import Fruit from '../../asset/images/icon/fruit.png'
import FreeMoney from '../../asset/images/icon/free.png'
import SevenDays from '../../asset/images/icon/notseven-days.png'
import './index.css'

class GoodsSelection extends React.Component {

  goHref = (type) => {
    switch (type) {
      case '01':
        Taro.navigateTo({
          url: '/pages/home/index',
        });
        break;
      case '02':
        Taro.navigateTo({
          url: '/pages/category/index',
        });
        break;
      case '03':
        Taro.navigateTo({
          url: '/pages/cart/index'
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

    const { specs } = this.props
    const { value } = this.props

    const offSelect = this.props.offSelect
    const openSelect = this.props.openSelect
    const offDistribution = this.props.offDistribution
    const openDistribution = this.props.openDistribution
    return (

      <View className='main-radio'>
        <View>
          <AtList hasBorder={false}>
            <View
              className='container-radio'
              onClick={openSelect}
            >
              <View className='container-title'>
                {Get('languages').detailPage.select}
              </View>
              <View className='container-content'>
                {specs}x{value}
              </View>
              <AtIcon
                className='container-icon'
                value='chevron-right'
                size='15'
                color='#bfbfbf'
              />
            </View>
          </AtList>
        </View>
        <View>
          <AtList hasBorder={false}>
            <View
              className='container-radio'
            // onClick={this.openDistribution.bind(this)}
            >
              <View className='container-title '>
                {Get('languages').detailPage.distribution}
              </View>
              <AtIcon
                className='container-icon'
                value='chevron-right'
                size='15'
                color='#bfbfbf'
              />
            </View>
            <View
              // onClick={this.offDistribution.bind(this)}
              title={Get('languages').deliveryTo}
            // className={this.state.displayDistribution}
            />
            <View
            // className={this.state.classstyleDistribution}
            >
            </View>
          </AtList>
        </View>
        <View>
          <AtList hasBorder={false}>
            <View
              className='container-radio'
            >
              <View className='container-title'>
                {Get('languages').detailPage.service}
              </View>
              <View className='container-wrapper'>
                <View className='container-wrapper-content'>
                  <Image
                    className='container-images'
                    src={SevenDays}
                    style='width:5vw; height:5vw;'
                    mode='aspectFit'
                  />
                  <View className='container-service-text'>
                    {Get('languages').detailPage.returnGoods}
                  </View>
                </View>
                <View className='container-wrapper-content'>
                  <Image
                    className='container-images'
                    src={Fruit}
                    style='width:5vw; height:5vw;'
                    mode='aspectFit'
                  />
                  <View className='container-service-text'>
                    {Get('languages').detailPage.compensation}
                  </View>
                </View>
                <View className='container-wrapper-content'>
                  <Image
                    className='container-images'
                    src={FreeMoney}
                    style='width:5vw; height:5vw;'
                    mode='aspectFit'
                  />
                  <View className='container-service-text'>
                    {Get('languages').detailPage.freeMoney}
                  </View>
                </View>
              </View>
            </View>
          </AtList>
        </View>
      </View>



    )
  }
};
export { GoodsSelection }