import { View, Image, Text } from '@tarojs/components'
import React from 'react'
import { AtButton, AtIcon, AtList, AtInputNumber } from 'taro-ui'

import { Get } from '../../global-data/index'
import Fruit from '../../asset/images/icon/fruit.png'
import FreeMoney from '../../asset/images/icon/free.png'
import SevenDays from '../../asset/images/icon/notseven-days.png'
import './index.css'

class GoodsSelection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      displaySelect: 'mask none',
      classstyleSelect: 'box moveFromBottom',
      displayDistribution: 'mask none',
      classstyleDistribution: 'box moveFromBottom',
    }
  };

  handleChangeNumber(value) {
    this.setState({
      value
    })
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

  render() {

    const { image } = this.props
    const { specs } = this.props
    const { inventory } = this.props
    const { price } = this.props
    return (
      <View className='atradio'>
        <View className='goodsSelection' >
          <AtList hasBorder={false}>
            <View
              className='radioList'
              onClick={this.openSelect.bind(this)}
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
            <View
              onClick={this.offSelect.bind(this)}
              className={this.state.displaySelect}
            />
            <View className={this.state.classstyleSelect}>
              <View className='detailPrice'>
                <View className='skuImage'>
                  <Image
                    src={image}
                    style="height: 16vh; width: 16vh"
                  />
                </View>
                <View className='goodsprice'>
                  ￥{price}
                </View>
              </View>
              <View className='textInventory'>
                <View className='inventory'>
                    {Get('languages').detailPage.inventory}
                </View>
                <View className='detailInventory'>
                  {inventory}
                </View>
              </View>
              <View className='skuText'>
                <View className='textSpecs'>                
                    {Get('languages').detailPage.specifications}
                </View>
                <AtButton
                  size='small'
                  className='detailSpecs'>
                  {specs}
                </AtButton>
              </View>
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
            </View>
          </AtList>
        </View>
        <View className='distribution'>
          <AtList hasBorder={false}>
            <View
              className='radioList'
              onClick={this.openDistribution.bind(this)}
            >
              <View className='textSelect '>
                  {Get('languages').detailPage.distribution}
              </View>
              <View className='specsDi'>
              </View>
              <AtIcon
                className='iconCheron'
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
        <View className='service'>
          <AtList hasBorder={false}>
            <View
              className='serviceList'
            >
              <View className='textService '>
                  {Get('languages').detailPage.service}
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
                style='width:5vw; height: 5vw;'
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