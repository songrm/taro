import Taro, { Component,Config } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtRadio } from 'taro-ui'
import {HomeList,InputNumber,DataNone} from '../../component'

import "taro-ui/dist/style/components/radio.scss"
import "taro-ui/dist/style/components/icon.scss"
import './index.scss'

type props = {
  goodsItems?:any,
  totle?: number,
  totlePrice?: number,
  items?:any
}
type state = {
  value:string
}

@connect(({cart}) => ({
  ...cart
}))

export default class cartPages extends Component<props, state> {
  config: Config = {
    navigationBarTitleText: '订单页'
  }

  constructor(props) {
    super(props)
    this.state = {
      value:'option1'
    }
  }

  onHomeList(obj){
    console.log(obj)
  }

  componentDidMount(){

  }

  handleChange(value){
    this.setState({
      value
    })
  }

  render () {
    const {goodsItems, items} =this.props
    return (
      <View className="cartPages">
        {
          goodsItems ? (
            goodsItems.map(list => {

              const item = items.find(item => {
                return item.id == list.id
              })

              return (
                <View className="cartList" key={list.id}>
                  <View className='cartImage'>
                    <Image src={list.image} mode='widthFix' className='image' />
                  </View>
                  <View className='cartName'>
                    {list.value}
                    <View className='cartPrice'> ¥ {list.price}</View>
                  </View>
                  <View className='cartInput'>
                  {item === undefined ? '':(
                    <InputNumber dataList={{
                      id: item.id,
                      number: item.number,
                      amount: list.amount
                    }} />
                  )}
                  </View>
                </View>
              )
            })

          ):(
            <DataNone />
          )
        }
      <View className='he20'></View>
      <AtRadio
        options={[
          { label: '微信支付', value: 'option1' },
          { label: '现金支付', value: 'option2' }
        ]}

        value={this.state.value}
        onClick={this.handleChange.bind(this)}
      />


        <HomeList title='猜你喜欢的' onHomeList= {this.onHomeList} columnNum={2} data={
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

          {/* 去结算 */}
          <View className='billingFt'>
            <View className='billingFt_price'>合计：{this.props.totlePrice}</View>
            <View className='billingFt_order'>下 单</View>
          </View>
      </View>
    )
  }
}
