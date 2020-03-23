import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './index.less'
import CashImage from '@/asset/icon/cash.png'

export interface cash {
  id:string
  cash:string
  state:string
  logo:string,
  totle:string,
  time:string
}
interface cashListProps {
  cashList: cash[]
}
const CashList =({cashList}:cashListProps)=>{
  return (
    <View>
      {cashList.map((list,index)=>{
        return (
          <View className='cash' key={index}>
            <View className='cash-title'>
              <View className='cash-title-left'>返现：¥{list.cash}</View>
              <View className='cash-title-right'>
                {list.state}
              </View>
            </View>
            <View className='cash-content'>
              <View className='cash-content-left'>
                <Image src='https://img.tebiemiao.cn/1582617226824.jpg' mode='widthFix' className='image' />
              </View>
              <View className='cash-content-middle'>
                <View className='dec'>共2件商品 | 总价：¥{list.totle}</View>
                <View className='time'>下单时间：{list.time}</View>
              </View>
              <View className='cash-content-right'>已完成</View>
            </View>

          </View>
        )
      })}

    </View>

  )
}
export default CashList
