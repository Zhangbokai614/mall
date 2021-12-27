import { View, Image } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import { AtButton, AtIcon, AtList, AtInputNumber, AtToast, AtAvatar } from 'taro-ui'

import { Get } from '../../global-data/index'
import Fruit from '../../asset/images/icon/fruit.png'
import FreeMoney from '../../asset/images/icon/free.png'
import SevenDays from '../../asset/images/icon/notseven-days.png'
import './index.css'
import * as homeApi from './service'

class GoodsSelection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      loading: true,  
      isOpened: false,
      displaySelect: 'mask none',
      classstyleSelect: 'box moveFromBottom',
      displayDistribution: 'mask none',
      classstyleDistribution: 'box moveFromBottom',
    }

  };

  update(id, value) {
    const status = homeApi.goodscar(id, value)
    console.log(id, value, status)
  }

  handleChangeNumber(value) {
    this.setState({
      value
    })
  };

  successedToast() {
    return (
      <AtToast
      isOpened
      text={Get('languages').detailPage.addSuccessed}
      />
    )
  };

  failedToast() {
    return (
      <AtToast
      isOpened
      text={Get('languages').detailPage.addfailed}
      />
    )
  };

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

  offSelect() {
    this.setState({
      displaySelect: 'mask none',
      classstyleSelect: 'box moveFromBottom',
    })
  };

  openSelect() {
    this.setState({
      displaySelect: 'mask block',
      classstyleSelect: 'box moveFromBottom showMove'
    })
  };

  offDistribution() {
    this.setState({
      displayDistribution: 'mask none',
      classstyleDistribution: 'box moveFromBottom',
    })
  };

  openDistribution() {
    this.setState({
      displayDistribution: 'mask block',
      classstyleDistribution: 'box moveFromBottom showMove'
    })
  };

  componentDidMount() {
		this.loading()
	}

	componentDidShow() {
		this.loading()
	}

	async loading() {
		Taro.showLoading({
			title: Get('languages').loading,
		})
    
		const status = await homeApi.goodscar()
		this.setState({
			status: status,
      loading: false
		}),
		Taro.hideLoading()
    console.log(this.state.status)
	}

  render() {

    const { image } = this.props
    const { specs } = this.props
    const { inventory } = this.props
    const { price } = this.props
    const { id } = this.props
    const address = this.props.address
    console.log(address)

    return (
      <View className='main-radio'>
        <View>
          <AtList hasBorder={false}>
            <View
              className='container-radio'
              onClick={this.openSelect.bind(this)}
            >
              <View className='container-title'>
                {Get('languages').detailPage.select}
              </View>
              <View className='container-content'>
                {specs}x{this.state.value}
              </View>
              <AtIcon
                className='container-icon'
                value='chevron-right'
                size='15'
                color='#bfbfbf'
              />
            </View>
            <View
              onClick={this.offSelect.bind(this)}
              className={this.state.displaySelect}
            />
            <View className={this.state.classstyleSelect}>
              <View className='show-content'>
                <View className='show-images'>
                  <Image
                    src={image}
                    style="height: 16vh; width: 16vh"
                  />
                </View>
                <View className='show-price'>
                {Get('languages').cny}{price}
                </View>
              </View>
              <View className='show-detail'>
                <View className='show-title'>
                  {Get('languages').detailPage.inventory}
                </View>
                <View className='show-number'>
                  {inventory}
                </View>
              </View>
              <View className='show-detail'>
                <View className='show-title'>
                  {Get('languages').detailPage.specifications}
                </View>
                <AtButton
                  size='small'
                  className='show-specs'>
                  {specs}
                </AtButton>
              </View>
              <View className='show-detail'>
                <View className='show-title'>
                  {Get('languages').detailPage.number}
                </View>
                <View className='show-input-number'>
                  <AtInputNumber
                    type='digit'
                    min={1}
                    max={99}
                    step={1}
                    width={100}
                    value={this.state.value}
                    onChange={this.handleChangeNumber.bind(this)}
                  />
                </View>
              </View>
              <AtButton
                className='show-addcar'
                onClick={this.update.bind(this, id, this.state.value)}
              >
                {Get('languages').detailPage.addcar}
              </AtButton>
              <AtButton
                className='show-gobuy'
                onClick={this.goHref.bind(this, '04')}
              >
                {Get('languages').detailPage.tobuy}
              </AtButton>
            </View>
          </AtList>
        </View>
        <View>
          <AtList hasBorder={false}>
            <View
              className='container-radio'
              onClick={this.openDistribution.bind(this)}
            >
              <View className='container-title '>
                {Get('languages').detailPage.distribution}
              </View>
              <View className='container-content'>
                {address}
              </View>
              <AtIcon
                className='container-icon'
                value='chevron-right'
                size='15'
                color='#bfbfbf'
              />
            </View>
            <View
              onClick={this.offDistribution.bind(this)}
              title={Get('languages').deliveryTo}
              className={this.state.displayDistribution}
            />
            <View
              className={this.state.classstyleDistribution}
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
                <Image
                  className='container-images'
                  src={Fruit}
                  style='width:5vw; height:5vw;'
                  mode='aspectFit'
                />
                <View className='container-service-text'>
                  {Get('languages').detailPage.compensation}
                </View>
                <Image
                  className='container-images'
                  src={FreeMoney}
                  style='width:5vw; height:5vw;'
                  mode='aspectFit'
                />
                <View className='container-service-text'>
                  {Get('languages').detailPage.freeMoney}
                </View>
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
            </View>
          </AtList>
        </View>
      </View>
    )
  }
};
export { GoodsSelection }