import Taro, { useEffect } from '@tarojs/taro'
import { View,Image } from "@tarojs/components"
import { AtRate } from 'taro-ui'
import List from '../components/evaluateList/index'
import './index.less'

const EvaluationDetails = () => {

  useEffect(() => {
    Taro.setNavigationBarTitle({title:'评价'})
  }, [])

  return (
    <View className='evaluationDetails'>
      <List imageSrc='https://img.tebiemiao.cn/1582617226824.jpg' goodsName='金龙鱼最多展示2行金龙鱼食用植物调和油，黄金比例，商' />
      <View className='details'>
        <View className='user'>
          <View className='user-image'>
            <Image src='https://img.tebiemiao.cn/1582617226824.jpg' className='image' mode='widthFix'/>
          </View>
          <View className='user-constent'>
            <View className='user-constent-id'>ID: 1231</View>
            <View className='user-constent-des'>
              <AtRate
                size={15}
                value={4}
                margin={5}
              />
              <View className='time'>2020-1-2</View>
            </View>
          </View>
        </View>
        <View className='comment-content'>
          很不错很好吃，我下回还要买很不错很好吃，我下回还要买很不错很好吃，我下回还要买很不错很好吃，我下回还要买
        </View>
        <View className='image-list'>
          <Image src='https://img.tebiemiao.cn/1582617226824.jpg' className='image' mode='widthFix'/>
        </View>
      </View>
    </View>
  )
}
export default EvaluationDetails
