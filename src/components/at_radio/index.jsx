import { View, Image, Text } from '@tarojs/components'
import React from 'react'
import { AtButton, AtIcon, AtListItem, AtFloatLayout, AtRadio, AtList, AtInputNumber } from 'taro-ui'

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
    const { specs } = this.props
    return (
      <View className='atradio'>
        <View className='goodsSelection' >
          <AtList hasBorder={false}>
            <View
              className='radioList'
              onClick={this.handleClickSelect.bind(this)}
            >
              <View className='textSelect'>
                <Text >
                  {Get('languages').detailPage.select}
                </Text>
              </View>
              <View className='specs'>
                <Text>
                  {specs}
                </Text>
              </View>
              <AtIcon
                className='iconCheron'
                value='chevron-right'
                size='15'
                color='#bfbfbf'
              />
            </View>
            <AtFloatLayout
              isOpened={this.state.atButtonSelect}
              onClose={this.handleClickSelect.bind(this)}
              title={Get('languages').detailPage.goodsSelection}
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
                    {Get('languages').detailPage.number}
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
                {Get('languages').detailPage.addcar}
              </AtButton>
              <AtButton
                className='confirm'
                onClick={this.goHref.bind(this, '04')}
              >
                {Get('languages').detailPage.tobuy}
              </AtButton>
            </AtFloatLayout>
          </AtList>
        </View>
        <View className='distribution'>
          <AtList hasBorder={false}>
            <View
              className='radioList'
              onClick={this.handleClickDistribution.bind(this)}
            >
              <View className='textSelect'>
                <Text>
                {Get('languages').detailPage.distribution}
                </Text>
              </View>
              <View className='specsDi'>
                <Text>
                  
                </Text>
                </View>
              <AtIcon
                className='iconCheron'
                value='chevron-right'
                size='15'
                color='#bfbfbf'
              />
            </View>
            <AtFloatLayout
              isOpened={this.state.atButtonDistribution}
              onClose={this.handleClickDistribution.bind(this)}
              title={Get('languages').deliveryTo}
            >
            </AtFloatLayout>
          </AtList>
        </View>
        <View className='service'>
          <AtList hasBorder={false}>
            <View 
              className='serviceList'
            >
              <View className='textService'>
                <Text >
                  {Get('languages').detailPage.service}
                </Text>
              </View>
              <Image
                className='imageFruit'
                src={Fruit}
                style='width:5vw; height:5vw;'
              />
              <View className='serviceDetail'>
                {Get('languages').detailPage.compensation}
              </View>
              <Image
                className='imageFree'
                src={FreeMoney}
                style='width:5vw; height:5vw;'
              />
              <View className='serviceDetail'>
                {Get('languages').detailPage.freeMoney}
              </View>
              <Image
                className='imageSevenDays'
                src={SevenDays}
                style='width:6vw; height: 6vw;'
              />
              <View className='serviceDetail'>
                {Get('languages').detailPage.returnGoods}
              </View>
            </View>
          </AtList>
        </View>
      </View>
    )
  }
};
export { GoodsSelection }