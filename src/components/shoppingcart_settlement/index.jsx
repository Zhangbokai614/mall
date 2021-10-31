import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import { Get } from "../../global-data";
import "./index.css";

class Settlement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { number, circleClink, circleState } = this.props;

    const settlement = (
      <>
        <View className="absolute flex-row">
          <View>
            <Text className="selectall">
              {Get("languages").shoppingCart.cartSettlement.total}：
            </Text>
            <Text className="selectall red">
              {Get("languages").shoppingCart.cartSettlement.moneySymbol}
            </Text>
            <Text className="number red">
              {number == undefined ? 0 : number}
            </Text>
          </View>
          <AtButton
            className="bottom"
            type="primary"
            size="normal"
            circle="true"
          >
            {Get("languages").shoppingCart.cartSettlement.settlement}
          </AtButton>
        </View>
      </>
    );

    const del = (
      <>
        <View className="absolute flex-row">
          <AtButton
            className="bottom"
            type="secondary"
            size="normal"
            circle="true"
          >
            {Get("languages").shoppingCart.cartSettlement.delete}
          </AtButton>
        </View>
      </>
    );

    return (
      <View className="footer flex-row align relative">
        <View onClick={circleClink}>
          <View
            className={
              circleState === false
                ? "unselected" + " " + "margin"
                : "selected" + " " + "margin"
            }
          ></View>
        </View>
        <Text className="selectall ">
          {Get("languages").shoppingCart.cartSettlement.selecTall}
        </Text>
        {this.props.topText === false ? settlement : del}
      </View>
    );
  }
}

export { Settlement };
