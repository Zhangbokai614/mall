import React, { Component } from "react";
import { AtIcon } from "taro-ui";
import { View, Text } from "@tarojs/components";

import { Get } from "../../global-data";
import "./index.css";

class Cartlike extends Component {
  render() {
    return (
      <View className="flex-row justify align margin">
        <View className="line1"></View>
        <AtIcon value="heart" size="12" color="#98989"></AtIcon>
        <Text className="text">{Get("languages").youmightlike}</Text>
        <View className="line1"></View>
      </View>
    );
  }
}

export { Cartlike };
