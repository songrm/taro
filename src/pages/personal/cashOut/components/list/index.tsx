import Taro, { Component, useState, memo } from '@tarojs/taro'
import { View,Text } from "@tarojs/components"
import classnames from 'classnames'
import {Y} from '@/components/index'
import './index.less'

interface list {
  id:string,
  money:string,
  time:string,
  state:string
}
interface CashOutDataProps {
  CashOutData:list
}

const CashOutList =({CashOutData}:CashOutDataProps)=>{

  if (!CashOutData) {
    return null
  }
  return (
    <View className='detailed-content' key={CashOutData.id}>
      <View className='detailed-content-dec'>
        <Text className='dec'>提现</Text>
        <View className='money'><Y />{CashOutData.money}</View>
      </View>
      <View className='detailed-content-dec'>
        <Text className='time'>{CashOutData.time}</Text>
        <View className={classnames(CashOutData.state)}>{CashOutData.state}</View>
      </View>
    </View>
  )
}

const areEqual = ({ CashOutData }: any) => {
  return CashOutData
}

export default memo(CashOutList)
