import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index/index'

import '@tarojs/async-await'
// import configStore from './store'
import dva from './utils/dva'
import models from './models/index'
import { Provider } from '@tarojs/redux'
import './app.scss'


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
      'pages/goodsDetails/index',
      'pages/classification/index',
      'pages/cartPages/index',
      'pages/setUp/index',
      'pages/classPage/index',
      'pages/index/index'
    ],
    subPackages:[
      {
        root: "subPackages/packageA",
        pages: [
          "pages/home/index",
          "pages/distinguish/index",
          "pages/login/index",
          "pages/order/index",
          "pages/pullPage/index"
        ]
      }
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },

    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/index/index",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "首页"
      },{
        pagePath: "pages/classification/index",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "分类"
      },{
        pagePath: "pages/classPage/index",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "识物"
      },{
        pagePath: "pages/setUp/index",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-active.png",
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
