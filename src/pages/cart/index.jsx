import { View } from "@tarojs/components";
import React, { Component } from "react";

import { CartTop } from "../../components/shoppingcart_top";
import { Card } from "../../components/shoppingcart_card/index";
import { Cartlike } from "../../components/shoppingcart_like";
import { Settlement } from "../../components/shoppingcart_settlement/index";
import "./index.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: false,
      bottomeCircle: false
    };

    this.childs = new Array();
  }

  onRef(ref) {
    this.childs.push(ref);
  }

  bottomeCircle() {
    this.setState({ bottomeCircle: !this.state.bottomeCircle });
    for (let child of this.childs) {
      child.changeState(!this.state.bottomeCircle);
    }
  }

  reverse(stateName) {
    this.setState({
      [stateName]: !this.state[stateName]
    });
  }

  handleClick(state) {
    this.setState({ bottomeCircle: state });
  }

  render() {
    return (
      <View>
        <CartTop
          clink={this.reverse.bind(this, "topText")}
          textState={this.state.topText}
        ></CartTop>
        <Card
          onRef={this.onRef.bind(this)}
          handleClick={this.handleClick.bind(this)}
          childs={this.childs}
          link="https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624780002-assets/web-upload/ddb1742e-309c-4b5f-ad4b-de2b656e69db.jpeg"
          title="德之不修，学之不讲，闻义不能徙，不善不能改。"
          config="男宽大号XL谨慎为宜"
          number="258"
        ></Card>
        <Cartlike></Cartlike>
        <Settlement
          topText={this.state.topText}
          circleClink={this.bottomeCircle.bind(this)}
          circleState={this.state.bottomeCircle}
        ></Settlement>
      </View>
    );
  }
}
