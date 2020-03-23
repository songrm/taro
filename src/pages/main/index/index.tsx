import Taro, { Component, Config } from '@tarojs/taro'
import { View,Image} from '@tarojs/components'
import SwiperAuo from './components/swiper'
import Demo from './components/demo'

import GridAuto from './components/gridAuto'
import HomeList from '../../../components/homeList'
// import Cart from '../../../components/cart'
import GoodsList from './components/goodList/index'
import CartPopup from './components/popup/index'

import GoodData from '@/mock/goods'
import {NavigationBar} from '@/components/index'
import { connect } from '@tarojs/redux'

import './index.less'



type props = {
  totle?
  items?
}
type state = {
  goodsTemp:any
  files:any
  scroll:{
    current:any
  }
}

@connect(({cart}) => ({
  ...cart
}))


export class home extends Component<props, state> {
  config: Config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom'

  }
  constructor(props){
    super(props);
    this.state={
      files: [{
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki1.jpeg',
      },
      {
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki2.jpeg',
      },
      {
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki3.png',
      }],
      goodsTemp:{},
      scroll:{
        current:0
      }
    }
  }
  onGridAuto(obj){
    console.log(obj)
  }
  onHomeList(obj){
    // Taro.navigateTo({
    //   url: `/pages/goodsDetails/index?${toObj(obj)}`
    // })
  }
  componentDidMount(){
    // const query = Taro.createSelectorQuery()
    // query.select('.aa').boundingClientRect().exec(res => {
    //   console.log(res,'====')
    // })

    // console.log(query, '=-=-=')

  }
  onGocart(){
    console.log('购物车')
    // Taro.navigateTo({
    //   url: `/pages/cartPages/index`
    // })
  }

  onPageScroll (e) {
    // this.refs.bar.onPageScroll(e.scrollTop)
    // console.log(this.refs.bar)
    // .current:e.scrollTop
    const scroll = {
      current:e.scrollTop
    }
    this.setState({
      scroll
    })
  }

  render() {
    return (
      <View className='home'>

        <NavigationBar
          title="首页"
          color='#ffffff'
          ref='bar'
          gradientColor='#000000'
          backgroundColor='#ffffff'
          gradientHeight={255}
          // scroll={scroll}
        />

        <SwiperAuo />


        <View className='shortcut'>
          <View className='list' onClick={()=>Taro.navigateTo({url:`/pages/personal/coupon/index`})}>优惠券</View>
          <View className='list' onClick={()=>Taro.navigateTo({url:`/pages/personal/wallet/index`})}>钱包</View>
          <View className='list' onClick={()=>Taro.navigateTo({url:`/pages/personal/order/index`})}>订单</View>
        </View>

        {GoodData && GoodData.map(list=>{
          return (
            <GoodsList list={list} key={list.id} />
          )
        })}


        {/* 显示数据 */}
        {
          this.props.items.length !== 0 && (
            <CartPopup />
          )
        }

        {/* <Demo /> */}

        {/* <Cart amount={this.props.totle} onGocart={this.onGocart} /> */}


      </View>
    )
  }
}

export default home
