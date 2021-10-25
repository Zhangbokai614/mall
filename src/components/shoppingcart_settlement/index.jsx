import { View, Text } from "@tarojs/components";
import React, { Component } from "react";
import { AtButton } from "taro-ui";
import { Get } from "../../global-data";

import "./index.css";

class Settlement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false
    };
  }

  clink() {
    this.setState({
      select: !this.state.select
    });

    console.log(this.state.select);
  }

  render() {
    const { number } = this.props;
    return (
      <View className="footer flex-row align relative">
        <View onClick={this.clink.bind(this)}>
          <View
            className={
              this.state.select == false
                ? "unselected" + " " + "margin"
                : "selected" + " " + "margin"
            }
          ></View>
        </View>
        <Text className="selectall ">{Get("languages").selecTall}</Text>
        <View className="absolute flex-row">
          <View>
            <Text className="selectall">{Get("languages").total}：</Text>
            <Text className="selectall red">￥</Text>
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
            {Get("languages").settlement}
          </AtButton>
        </View>
      </View>
    );
  }
}

export { Settlement };
