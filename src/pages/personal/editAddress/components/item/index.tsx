import Taro from '@tarojs/taro'
import { View } from "@tarojs/components"
import './index.less'

const Item =({children,title}) => {
  // console.log(title,'----')
  return (
    <View className='EditAddressItem df-sb'>
      <View className='itemTitle'>{title}</View>
      <View className='itemMain'>{children}</View>
    </View>
  )
}
export default Item
