import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/main/index/index'

// import configStore from './store'
import dva from './utils/dva'
import models from './models/index'
import { Provider } from '@tarojs/redux'
import './styles/app.less'


const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/main/index/index',
      'pages/main/goodsDetails/index',
      'pages/main/classification/index',
      'pages/main/cartPages/index',
      'pages/main/mine/index',
      'pages/main/classPage/index',

      // 我的页面
      'pages/personal/authentication/index',
      'pages/personal/order/index',
      'pages/personal/address/index',
      'pages/personal/editAddress/index',
      'pages/personal/coupon/index',
      'pages/personal/wallet/index',
      'pages/personal/cashOut/index'

    ],
    // subPackages:[
    //   {
    //     root: "subPackages/packageA",
    //     pages: [
    //       "pages/home/index",
    //       "pages/distinguish/index",
    //       "pages/login/index",
    //       "pages/order/index",
    //       "pages/pullPage/index"
    //     ]
    //   }
    // ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '演示接口',
      navigationBarTextStyle: 'black',
    },

    tabBar: {
      color: "#262626",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/main/index/index",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-hover.png",
        text: "首页"
      },{
        pagePath: "pages/main/classification/index",
        iconPath: "./assets/tab-bar/class.png",
        selectedIconPath: "./assets/tab-bar/class-hover.png",
        text: "分类"
      },{
        pagePath: "pages/main/classPage/index",
        iconPath: "./assets/tab-bar/cart.png",
        selectedIconPath: "./assets/tab-bar/cart-hover.png",
        text: "识物"
      },{
        pagePath: "pages/main/mine/index",
        iconPath: "./assets/tab-bar/my.png",
        selectedIconPath: "./assets/tab-bar/my-hover.png",
        text: "我的"
      }]

    }

  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
