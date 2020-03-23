import Taro from '@tarojs/taro'
import { View,Image } from "@tarojs/components"
import './index.less'

interface evaluateListProps {
  imageSrc:string
  goodsName:string
}

const List = ({imageSrc,goodsName}:evaluateListProps) =>{
  return (
    <View className='evaluate-list'>
        <View className='evaluate-list-top'>
          <View className='evaluate-list-top-image'>
            <Image src={imageSrc} mode='widthFix' className='image' />
          </View>
          <View className='evaluate-list-top-content'>
            <View className='title wes-2'>{goodsName}</View>
          </View>
        </View>
      </View>
  )
}
export default List
