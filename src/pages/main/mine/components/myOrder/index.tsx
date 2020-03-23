import Taro, { memo } from '@tarojs/taro'
import { View,Image} from '@tarojs/components'
import './index.less'

// interface orderProp {
//   orderList:{name:string,number:string,url:string}
// }

const MyOrder =({orderList}) =>{

  if(!orderList){
    return null
  }

  return (
    <View className='order-list' key={orderList.name} onClick={()=>{Taro.navigateTo({ url: orderList.url })}}>
      <View className='order-list-icon'>
        <View className='number'>{orderList.number}</View>
        <View className='iconfont image'>&#xe6a4;</View>
      </View>
      <View className='order-list-txt'>
        {orderList.name}
      </View>
    </View>
  )
}
// const areEqual = ({ walletList: prevRepo }: any, { walletList }: any) => {
//   return (
//     prevRepo && prevRepo.name === walletList.name && prevRepo.money === walletList.money
//   )
// }
MyOrder.options = {
  addGlobalClass: true
}
export default memo(MyOrder)
