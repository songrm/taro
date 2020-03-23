import { View,Image,Text } from "@tarojs/components"
import { Y } from '@/components'

import classnames from 'classnames'
// import datetime from '@/filters/datetime'
import './index.less'

import { useState,memo } from "@tarojs/taro"

// interface orderItem{
//   id:string
//   orderStatus:string
//   companyLogoUrl:string
// }

// const orderStatus = (value) => {
//   console.log('orderStatus')
//   if (value) {
//     return {
//       success: '已完成',
//       created: '待支付',
//       payed: '待接单',
//       dispatched: '配送中',
//       canceled: '已取消',
//       close: '已关闭'
//     }[value]
//   } else {
//     return ''
//   }
// }

const Items = ({orderItem}) => {

  if(orderItem === undefined) {
    return null
  }

  const logoImg = 'https://img.tebiemiao.cn/1582617226824.jpg'

  const [orderStatus, setorderStatus] = useState({
    success: '已完成',
    created: '待支付',
    payed: '待接单',
    dispatched: '配送中',
    received: '待收货',
    group:'待成团',
    canceled: '已取消',
    close: '已关闭'
  })
  const hasPay = orderItem.orderStatus === 'created'
  const hasReceived = orderItem.orderStatus === 'received'
  const hasGroup = orderItem.orderStatus === 'group'

  const onDetail = (obj) =>{
    console.log(obj)
    Taro.navigateTo({url:`/pages/personal/orderDetails/index?id=${obj}`})
  }

  return (
    <View className='orderList-card'>
      <View className='meta df-sb'>
        <View className='meta-name'> </View>
        <View className='meta-status df-c'>
          <Text className='meta-status__text' onClick={()=>onDetail(orderItem.id)}>
            {orderStatus[orderItem.orderStatus]}
          </Text>

        </View>
      </View>
      <View className='box df-sb' onClick={()=>onDetail(orderItem.id)}>
        <View className='box-info df-col-sb'>
          <View className='box-intro'>
            <Image
              className='box-cover'
              mode='aspectFill'
              src={orderItem.companyLogoUrl || logoImg}
            />
            <View className='box-con'>
              <View className='box-name wes'>
                <Text>共9件商品</Text>
                {orderItem.orderStatus!=='created' && (
                  <View className='box-name__more'> <Text className='division'>|</Text> 支付：<Y />26.8</View>
                )}

              </View>

              <View className='box-time'>下单时间：2020/01/12 11:11</View>
              {orderItem.orderStatus === 'group' && (
                <View className='box-time'>拼团中还差1人拼成，剩余时间23:11:11后结束</View>
              )}

            </View>
          </View>
        </View>

      </View>
      {(hasPay || hasReceived || hasGroup) && (
        <View className='foot'>
          <View className='foot-pay'>
            {hasPay && (
              <View className='foot-pay__btn btn1'>去支付</View>
            )}
            {
              hasReceived && (
                <View className='foot-pay__btn btn2'>申请退款</View>
              )
            }

            {
              hasGroup && (
                <View>
                  <View className='foot-pay__btn btn2'>申请退款</View>
                  <View className='foot-pay__btn btn3'>邀请好友</View>
                </View>
              )
            }
          </View>
        </View>
      )}
    </View>
  )
}
Items.options = {
  addGlobalClass: true,

}
export default memo(Items)
