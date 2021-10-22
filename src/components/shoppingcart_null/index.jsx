import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { Get } from "../../global-data/index";

import image from "../../asset/images/tabs/cart_null.png";
import "./index.css";

class Cartnull extends Component {
  constructor(props) {
    super(props);
  }

  jump() {
    Taro.switchTab({
      url: "/pages/home/index"
    });
  }

  render() {
    return (
      <View className="flex-col">
        <View className="spacing">
          <Image src={image} mode="aspectFit" className="image" />
        </View>
        <Text className="justify textone">
          {Get("languages").shoppingcartisempty}
        </Text>
        <Text className="justify texttwo">
          {Get("languages").hurryupandbuysomebaby}
        </Text>
        <AtButton
          type="secondary"
          size="normal"
          circle="true"
          onClick={this.jump.bind(this)}
        >
          {Get("languages").goshopping}
        </AtButton>
      </View>
    );
  }
}

export { Cartnull };
