import Taro, { Component, Config } from '@tarojs/taro'

import { View } from '@tarojs/components'
import SwiperAuo from './components/swiper'
import GridAuto from './components/gridAuto'
import HomeList from '../../component/homeList'
import Cart from '../../component/cart'

import { connect } from '@tarojs/redux'
import {toObj} from '../../utils/ZipCodeValidator'
import "taro-ui/dist/style/components/grid.scss";
import './index.scss'

type props = {
  totle?
}
type state = {}
@connect(({cart}) => ({
  ...cart
}))
export class home extends Component<props, state> {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  onGridAuto(obj){
    console.log(obj)
  }
  onHomeList(obj){
    Taro.navigateTo({
      url: `/pages/goodsDetails/index?${toObj(obj)}`
    })
  }
  componentDidMount(){
    console.log(this.props)
  }
  onGocart(){
    console.log('购物车')
    Taro.navigateTo({
      url: `/pages/cartPages/index`
    })
  }

  render() {
    return (
      <View className='home'>
        <SwiperAuo />

        <GridAuto onGridAuto={this.onGridAuto} columnNum={3}  data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '领取中心',
              tag:'招牌'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '找折扣'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '领会员'
            }
          ]
        }/>

        <HomeList onHomeList= {this.onHomeList} columnNum={2} data={
          [
            {
              image: 'https://img.tebiemiao.com/1569492030133.jpg',
              price:'12',
              id:123456,
              amount: 3,
              value: '特价商品'
            },
            {
              image: 'https://img.tebiemiao.com/1569492049767.jpg',
              price:'122',
              id:12321,
              amount: 8,
              value: '暖水壶'
            }
          ]}/>


        <HomeList title='猜你喜欢的' onHomeList= {this.onHomeList} columnNum={2} data={
          [
            {
              image: 'https://img.tebiemiao.com/1571900504622.jpg',
              price:'12',
              id:123426,
              amount: 3,
              value: '特价商品'
            },
            {
              image: 'https://img.tebiemiao.com/1571900504622.jpg',
              price:'122',
              id:123221,
              amount: 8,
              value: '暖水壶'
            }
          ]}/>
          <Cart amount={this.props.totle} onGocart={this.onGocart} />


      </View>
    )
  }
}

export default home
