import languages from './asset/languages/zn-cn.json';

export default {
  // "lazyCodeLoading": "requiredComponents",

  pages: [
    'pages/home/index',
    'pages/feature/index',
    'pages/cart/index',
    'pages/user/index',
    'pages/detail/index',
    'pages/orders/index',
    'pages/order-detail/index',
    'pages/indent/index',
    'pages/logistics/index',
  ],

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FF4949',
    navigationBarTitleText: 'Page',
    navigationBarTextStyle: 'white',
  },

  tabBar: {
    color: '#BFBFBF',
    selectedColor: '#FF4949',
    backgroundColor: '#FFFFFF',
    list: [
      {
        pagePath: 'pages/home/index',
        text: languages.home,
        iconPath: './asset/images/tabs/home.png',
        selectedIconPath: './asset/images/tabs/home-select.png',
      },
      {
        pagePath: 'pages/feature/index',
        text: languages.features,
        iconPath: './asset/images/tabs/specialty.png',
        selectedIconPath: './asset/images/tabs/specialty-select.png',
      },
      {
        pagePath: 'pages/cart/index',
        text: languages.cart,
        iconPath: './asset/images/tabs/shopping-cart.png',
        selectedIconPath: './asset/images/tabs/shopping-cart-select.png',
      },
      {
        pagePath: 'pages/user/index',
        text: languages.user.myself,
        iconPath: './asset/images/tabs/user.png',
        selectedIconPath: './asset/images/tabs/user-select.png',
      },
    ],
  },
};
