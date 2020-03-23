import Taro, { memo, useState } from "@tarojs/taro"
import { View,Text } from "@tarojs/components"
import classnames from 'classnames'
import './index.less'


interface list{
  id:string,
  name:string
}
interface dataList {
  dataList: list
}

const CouponList = ({dataList}:dataList) => {
  if (!dataList) {
    return null
  }
  const [isShow, setisShow] = useState(false)
  return (
    <View className='coupon'>
        <View className='coupon-top'>
          <View className='left'>
            <View className='number'>$9.00</View>
            <Text className='des'>满99元可用</Text>
          </View>
          <View className={classnames({'right':true,'flex-btn':false})}>
            <View className='c-title'>{dataList.name}===========-------</View>
            <View className='c-time'>2019/12/11-2020/11/12</View>
            <View className='des' onClick={()=>setisShow(!isShow)}>
              <Text>详细信息</Text>
              <Text className='iconfont arrow' style={isShow?'transform: rotate(90deg);':'transform: rotate(0deg);'}>&#xe61b;</Text>
            </View>
          </View>
          {/* <View className='btn'>立即领取</View> */}
          {/* flex-btn  控制是否显示3列*/}
        </View>
        {
          isShow && (
            <View className='describe'>
              <View className='describe-list'>
                <View className='left'>适用商品:</View>
                <View className='right'>爆品生鲜</View>
              </View>
              <View className='describe-list'>
                <View className='left'>使用描述:</View>
                <View className='right'>1、不可以与其他活动同享</View>
              </View>
            </View>
          )
        }

    </View>
  )
}

const areEqual = ({ dataList: prevProps }: any, { dataList }: any) => {
  return prevProps === dataList
}

CouponList.options={
  addGlobalClass: true
}

export default memo(CouponList,areEqual)

