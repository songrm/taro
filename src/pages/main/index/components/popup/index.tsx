import Taro, { useEffect, useState } from '@tarojs/taro'
import { View,Text } from "@tarojs/components"
import './index.less'
import {InputNumber} from '@/components/index'

import { useSelector, useDispatch } from '@tarojs/redux'

import {getSum} from '@/utils/ZipCodeValidator'


const CartPopup = () => {
  const {items} = useSelector<any, any>(state => state.cart)


  const totle =items.length===0 ?0: items.map(list=>{
    return list.number*list.price
  }).reduce(getSum).toFixed(2)

  return (
    <View className='all'>
      {items !==undefined && (
        items.map(list=>{
          return (
            <View className='list' key={list.id}>
              <View className='title'>{list.name} ¥{list.price} </View>
              <InputNumber dataList={list} />
            </View>
          )
        })
      )}
      <View className='accounts'>
        <View className='accounts-num'>共 ¥{totle}</View>
        <View className='accounts-btn' onClick={()=>{Taro.navigateTo({url:'/pages/main/cartPages/index'})}}>去结算</View>
      </View>
    </View>
  )
}
export default CartPopup
