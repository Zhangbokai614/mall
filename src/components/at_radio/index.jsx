import { View, Image, Text } from '@tarojs/components'
import React from 'react'
import { AtButton, AtListItem, AtFloatLayout, AtRadio, AtList, AtInputNumber, AtTag } from 'taro-ui'

import { Get } from '../../global-data/index'
import Fruit from '../../asset/images/icon/fruit.png'
import FreeMoney from '../../asset/images/icon/free.png'
import SevenDays from '../../asset/images/icon/seven-days.png'
import './index.css'

class GoodsSelection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      atButtonSelect: false,
      atButtonDistribution: false,
      atButtonService: false,
      select: '',
      distribution: '',
      service: '',
      value: 1,
    }
  };

  handleChangeSelect(select) {
    this.setState({
      select
    })
  };

  handleClickSelect() {
    this.state.atButtonSelect
      ? this.setState({
        atButtonSelect: false,
      })
      : this.setState({
        atButtonSelect: true,
      })
  };

  handleChangeDistribution(distribution) {
    this.setState({
      distribution
    })
  };

  handleClickDistribution() {
    this.state.atButtonDistribution
      ? this.setState({
        atButtonDistribution: false,
      })
      : this.setState({
        atButtonDistribution: true,
      })
  };

  handleChangeService(service) {
    this.setState({
      service
    })
  };

  handleClickService() {
    this.state.atButtonService
      ? this.setState({
        atButtonService: false,
      })
      : this.setState({
        atButtonService: true,
      })
  };

  handleChangeNumber(value) {
    this.setState({
      value
    })
  };
  
  btnClick = (value) => {
    let num = this.state.value;
    console.log(num)
    num = value === 'add' ? (num += 1) : (num -= 1);
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
          url: '/pages/cart/index?value=' + this.state.value
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

    const { image } = this.props
    const value = this.state.value
    console.log(value)
    return (
      <View className='atradio'>
        <View className='goodsSelection'>
          <AtList>
            <AtListItem
              className='radioList'
              title={Get('languages').atradio.title.select}
              onClick={this.handleClickSelect.bind(this)}
              arrow='right' />
            <AtFloatLayout
              isOpened={this.state.atButtonSelect}
              onClose={this.handleClickSelect.bind(this)}
              title={Get('languages').goodsSelection}
              className='floatlayoutbutton'
            >
              <View>
                <Image
                  src={image}
                  style="height: 16vh; width: 16vh"
                />
              </View>
              <View className='floatlayoutHeight'>
                <View className='numberChange'>
                  <View className='number'>
                    {Get('languages').number}
                  </View>
                  <View className='numberLocation'>
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
              </View>
              <AtButton
                className='goodscar'
                onClick={this.goHref.bind(this, '03')}
              >
                {Get('languages').addcar}
              </AtButton>
              <AtButton
                className='confirm'
                onClick={this.goHref.bind(this, '04')}
              >
                {Get('languages').tobuy}
              </AtButton>
            </AtFloatLayout>
          </AtList>
        </View>
        <View className='service'>
          <AtList>
            <View
              className='serviceList'
              onClick={this.handleClickService.bind(this)}
            >
              <View className='textService'>
                <Text >
                  {Get('languages').atradio.title.service}
                </Text>
              </View>
              <Image
                className='imageFruit'
                src={Fruit}
                style='width:5vw; height:5vw;'
              />
              <View className='serviceDetail'>
                {Get('languages').compensation}
              </View>
              <Image
                className='imageFree'
                src={FreeMoney}
                style='width:5vw; height:5vw;'
              />
              <View className='serviceDetail'>
                {Get('languages').freeMoney}
              </View>
              <Image
                className='imageSevenDays'
                src={SevenDays}
                style='width:6vw; height: 6vw;'
              />
              <View className='serviceDetail'>
                {Get('languages').returnGoods}
              </View>
            </View>
            <AtFloatLayout
              isOpened={this.state.atButtonService}
              onClose={this.handleClickService.bind(this)}
            >
              <AtRadio
                value={this.state.service}
                onClick={this.handleChangeService.bind(this)}
              />
            </AtFloatLayout>
          </AtList>
        </View>
      </View>
    )
  }
};
export { GoodsSelection }