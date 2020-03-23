import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

const Yuan =({
  style
}: {
  style?: {
    [k: string]: string
  }
}) => {
  return (
    <View className='yuan' style={style}>
      ¥
    </View>
  )
}

Yuan.defaultProps = {
  style: {}
}

export default Yuan
