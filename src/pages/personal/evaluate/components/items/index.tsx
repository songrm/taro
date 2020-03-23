import Taro, { useState } from '@tarojs/taro'
import { View,Image } from "@tarojs/components"

import { AtRate } from 'taro-ui'
import './index.less'


interface evaluateList {
  isEvaluated:boolean
}
interface dataProps {
  data:evaluateList

}

const Items = ({data}:dataProps) => {
  const [starsValue, setstarsValue] = useState(2)

  if(data === undefined) {
    return null
  }

  return (
    <View className='evaluate-list'>
        <View className='evaluate-list-top'>
          <View className='evaluate-list-top-image'>
            <Image src='https://img.tebiemiao.cn/1582617226824.jpg' mode='widthFix' className='image' />
          </View>
          <View className='evaluate-list-top-content'>
            <View className='title wes-2'>金龙鱼食用植物调和油，黄金比例，商品名称金龙鱼食用植物调和油，黄金比例，商品名称最多展示2行金龙鱼食用植物调和油，黄金比例，商品名称最多展示2行最多展示2行</View>
            <View className='comment'>
              {!data.isEvaluated && (
                <View className='comment-stars'>
                  <AtRate
                    size={15}
                    value={4}
                  />
                </View>
              )}

              {
                data.isEvaluated && (
                  <View className='comment-btn' onClick={()=> Taro.navigateTo({url:`/pages/personal/fillEvaluation/index`})}>评价</View>
                )
              }

            </View>
          </View>
        </View>
        {
          !data.isEvaluated && (
            <View className='des wes-2'>回还要就是物流很不错，很好吃，我下回还要买，就是物流太慢了，很不错，很好吃，我下回还要买，就是物流太慢了</View>
          )
        }

      </View>
  )
}
Items.options = {
  addGlobalClass: true,

}
export default Items
