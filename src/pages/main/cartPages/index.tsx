import Taro, { Component,Config, useState } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import { connect, useSelector } from '@tarojs/redux'

import {HomeList,InputNumber,DataNone} from '../../../components'
import {getSum} from '@/utils/ZipCodeValidator'

import goodsData from '@/mock/goods'

import './index.less'



const CartPages = () =>{

  const {items} = useSelector<any, any>(state => state.cart)
  const totle =items.length===0 ?0: items.map(list=>{
    return list.number*list.price
  }).reduce(getSum).toFixed(2)

  const onHomeList=(obj)=>{
    console.log(obj)
  }

  return (
    <View className="cartPages">
        {
          items ? (
            items.map(list => {

              const item = items.find(item => {
                return item.id == list.id
              })

              return (
                <View className="cartList" key={list.id}>
                  <View className='cartImage'>
                    <Image src={list.url} mode='widthFix' className='image' />
                  </View>
                  <View className='cartName'>
                    {list.name}
                    <View className='cartPrice'> ¥ {list.price}</View>
                  </View>
                  <View className='cartInput'>
                  {item === undefined ? '':(
                    <InputNumber dataList={list} />
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

      <View className='pay'>
        <View className='pay-title'>支付方式</View>
        微信支付
      </View>


        <HomeList title='猜你喜欢的' onHomeList= {onHomeList} columnNum={2} data={goodsData}/>

          {/* 去结算 */}
          <View className='billingFt'>
            <View className='billingFt_price'>合计：{totle}</View>
            <View className='billingFt_order'>去支付</View>
          </View>
      </View>
  )
}
export default CartPages
