import Taro, { Component,Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View,Image } from '@tarojs/components'

import {Cart,Info,DataNone} from '../../component'

import toast from '../../utils/toast'
// import Cart from '../../component/cart'
// import Info from '../../component/info/index'


import './index.scss'

type props = {
  dispatch?:any,
  name?:string,
  totle:number
}
type state = {
  item:any
}

@connect(({cart,common}) => ({
  ...cart,
  ...common
}))

export default class goodsDetails extends Component<props, state> {
  config: Config = {
    navigationBarTitleText: '商品详情'
  }
  constructor(props) {
    super(props)
    this.goCart= this.goCart.bind(this)
    this.onGocart = this.onGocart.bind(this)
  }
  componentWillMount () {
    console.log(this.props,'this.props')
  }
  onGocart(){

    Taro.navigateTo({
      url: `/pages/cartPages/index`
    })
  }
  goCart(){
    /**
     * 1.item [] 如果为空 购物车没有数据
     * item 不为空，先判断是否存在id 存在 amount +1
     * 不存在的话  添加id
     */
    const name = Taro.getStorageSync('name')

    if(name === ''){
      toast.showToast('未登陆')

      Taro.navigateTo({
        url: `/subPackages/packageA/pages/login/index`
      })
      return false
    }

    this.props.dispatch({
      type: 'cart/addCart',
      payload: this.$router.params
    })
  }
  render () {
    const {image,value,price} = this.$router.params

    // const data= {
    //   price,id,amount:Number(amount)}
    return (
      <View className="goodsDetails">
        <View className='imageDiv'>
          <Image src={image} mode='widthFix' className='image' />
        </View>

          <Info data='下方可领券，领券后再省15元。' />
          <View className='goodsDetails_price'>
            {price}
          </View>
          <View className='goodsDetails_name'>
            {value}
          </View>

          <View className="spmcBanner">
            <View className="spmcPrice" >
              <View className="spmcDiscount" >
                <View >专享95折</View>
              </View>
              <View className="spmcDesc" >
                <View>超级会员价¥122.6,可省¥6.4</View>
              </View>
            </View>
            <View className="spmcPrivilegeMess">再享每单返利6%/每月1件40元赠品等省钱权益</View>
            <View className="spmcBtn">立即开通</View>
          </View>

          <View>
            这里是详情
            <DataNone />
          </View>
          <Cart amount={this.props.totle} onGocart={this.onGocart} />
          <View onClick={this.goCart} className='addCart'>加入购物车</View>
      </View>
    )
  }
}
