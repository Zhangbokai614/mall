import languages from "./asset/languages/zn-cn.json";

export default {
  pages: [
    "pages/home/index",
    "pages/cart/index",
    "pages/user/index",
    "pages/detail/index",
    "pages/orders/index",
  ],

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ff4949",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white"
  },

  tabBar: {
    color: "#bfbfbf",
    selectedColor: "#ff4949",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/home/index",
        text: languages.home,
        iconPath: "./asset/images/tabs/home.png",
        selectedIconPath: "./asset/images/tabs/home-select.png"
      },
      {
        pagePath: "pages/cart/index",
        text: languages.goodscar,
        iconPath: "./asset/images/tabs/shopping-cart.png",
        selectedIconPath: "./asset/images/tabs/shopping-cart-select.png"
      },
      {
        pagePath: "pages/user/index",
        text: languages.myself,
        iconPath: './asset/images/tabs/user.png',
        selectedIconPath: './asset/images/tabs/user-select.png'
      }
    ]
  }
};
