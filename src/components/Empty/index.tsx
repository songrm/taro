import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import './index.less'

const NoAuthority =() =>{
  return (
    <View className='empty-wrap'>
        <View>暂无数据</View>
    </View>
  )
}

export default NoAuthority
