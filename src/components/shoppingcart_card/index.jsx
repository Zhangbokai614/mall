import React, { Component } from "react";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtInputNumber } from "taro-ui";

import "./index.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { select: "unselected", onclink: false, value: 1 };
  }

  tick() {
    switch (this.state.select) {
      case "unselected":
        this.setState({
          select: "selected"
        });
        break;
      case "selected":
        this.setState({
          select: "unselected"
        });
        break;
    }
    console.log(this.state.select);
  }

  handleClose() {
    this.setState({
      onclink: !this.state.onclink
    });
    console.log(this.state.onclink);
  }

  number(value) {
    this.setState({
      value
    });
  }

  render() {
    const { link, title, config, number } = this.props;

    return (
      <View className="flex-row frame align relative">
        <View className="frameleft">
          <View
            className={this.state.select}
            onClick={this.tick.bind(this)}
          ></View>
        </View>
        <View className="align">
          <Image className="cardImage" mode="scaleToFill" src={link} />
        </View>
        <View className="flex-col frameright relative">
          <Text className="producttitle">{title}</Text>
          <View>
            <View className="standard" onClick={this.handleClose.bind(this)}>
              <Text className="standardtext">{config}</Text>
              <AtIcon value="chevron-down" size="18" color="#C2C2C2"></AtIcon>
            </View>
          </View>
          <View className="absolute down relative">
            <Text className="money">￥</Text>
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
    );
  }
}

export { Card };
