import { View } from "@tarojs/components";
import React, { Component } from "react";

import { Card } from "../../components/shoppingcart_card/index";
import { Cartlike } from "../../components/shoppingcart_like";
import { Carttop } from "../../components/shoppingcart_top";
import { Settlement } from "../../components/shoppingcart_settlement/index";
import "./index.css";

export default class index extends Component {
  render() {
    return (
      <View>
        <Carttop></Carttop>
        <Card
          link="https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624780002-assets/web-upload/ddb1742e-309c-4b5f-ad4b-de2b656e69db.jpeg"
          title="德之不修，学之不讲，闻义不能徙，不善不能改。"
          config="男宽大号XL谨慎为宜"
          number="258"
        ></Card>
        <Card
          link="https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624780002-assets/web-upload/ddb1742e-309c-4b5f-ad4b-de2b656e69db.jpeg"
          title="德之不修，学之不讲，闻义不能徙，不善不能改。"
          config="男宽大号XL谨慎为宜"
          number="258"
        ></Card>
        <Cartlike></Cartlike>
        <Settlement></Settlement>
      </View>
    );
  }
}
