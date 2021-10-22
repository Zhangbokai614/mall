import { View, Text } from "@tarojs/components";
import React, { Component } from "react";
import { Get } from "../../global-data";

import "./index.css";

class Carttop extends Component {
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
  }

  render() {
    return (
      <View className="cube align flex-row relative">
        <Text className="hint">{Get("languages").hint}</Text>
        <Text className="textright absolute" onClick={this.clink.bind(this)}>
          {this.state.select == false
            ? Get("languages").edit
            : Get("languages").achieve}
        </Text>
      </View>
    );
  }
}

export { Carttop };
