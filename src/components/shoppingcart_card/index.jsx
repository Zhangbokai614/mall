import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtInputNumber, AtSwipeAction, AtFloatLayout } from "taro-ui";

import { Get } from "../../global-data";
import "./index.css";
import "./index.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circle: false,
      standard: false,
      value: 1
    };
  }

  async reverse(stateName) {
    await this.setState({
      [stateName]: !this.state[stateName]
    });
    const isBelowThreshold = currentValue => currentValue.state.circle === true;
    const { handleClick } = this.props;
    if (this.props.childs.every(isBelowThreshold)) {
      handleClick(true);
    }
    if (!this.state.circle) {
      handleClick(false);
    }
  }

  number(value) {
    this.setState({
      value
    });
  }

  changeState(state) {
    this.setState({
      circle: state
    });
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  render() {
    const res = Taro.getSystemInfoSync();
    const { link, title, config, number } = this.props;
    return (
      <View className="action">
        <AtSwipeAction
          maxDistance={res.screenWidth * 0.2453}
          areaWidth={res.screenWidth}
          options={[
            {
              text: Get("languages").shoppingCart.cartCard.delete,
              style: {
                backgroundColor: "#FF4949"
              }
            }
          ]}
        >
          <View className="flex-row frame align relative">
            <View
              className="frameleft"
              onClick={this.reverse.bind(this, "circle")}
            >
              <View
                className={
                  this.state.circle === false ? "unselected" : "selected"
                }
              ></View>
            </View>
            <View className="align">
              <Image className="cardImage" mode="scaleToFill" src={link} />
            </View>
            <View className="flex-col frameright relative">
              <Text className="producttitle">{title}</Text>
              <View>
                <View
                  className="standard"
                  // onClick={this.reverse.bind(this, "standard")}
                >
                  <Text className="standardtext">
                    {config}
                    <AtIcon
                      value="chevron-down"
                      size="18"
                      color="#C2C2C2"
                    ></AtIcon>
                  </Text>
                </View>
              </View>
              <View className="absolute down relative">
                <Text className="money">
                  {Get("languages").shoppingCart.cartCard.moneySymbol}
                </Text>
                <Text className="number">{number}</Text>
                <AtInputNumber
                  className="absolute counter"
                  min={1}
                  max={99}
                  step={1}
                  value={this.state.value}
                  onChange={this.number.bind(this)}
                ></AtInputNumber>
              </View>
            </View>
          </View>
        </AtSwipeAction>
        <AtFloatLayout isOpened={true} onClose={true}>
          <View className="flex-row">
            <Image className="actionCardImage " mode="scaleToFill" src={link} />
            <View className="actionBottom">
              <View>
                <Text>已选择：</Text>
                <Text>das撒擦速度开门</Text>
              </View>
              <View>
                <Text className="money">
                  {Get("languages").shoppingCart.cartCard.moneySymbol}
                </Text>
                <Text className="number">{number}</Text>
              </View>
            </View>
          </View>
        </AtFloatLayout>
      </View>
    );
  }
}

export { Card };
