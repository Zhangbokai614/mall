import languages from './asset/languages/zn-cn.json'

export default {
  pages: [
    "pages/home/index",
    "pages/cart/index",
    "pages/detail/index"
  ],

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ff4949",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white",
  },

  tabBar: {
    color: "rgba(68, 68, 68, 1)",
    selectedColor: "#ff4949",
    backgroundColor: "white",
    list: [
      {
        pagePath: 'pages/home/index',
        text: languages.home,
        iconPath: './asset/images/tabs/home.png',
        selectedIconPath: './asset/images/tabs/home-select.png'
      },
      {
        pagePath: 'pages/cart/index',
        text: languages.shoppingCart,
        iconPath: './asset/images/tabs/shopping-cart.png',
        selectedIconPath: './asset/images/tabs/shopping-cart-select.png'
      }]
  }
};
