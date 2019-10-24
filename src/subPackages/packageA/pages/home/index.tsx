import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

type props = {}
type state = {}

export default class home extends Component<props, state> {
  render () {
    return (
      <View className="home">
        // 分包 内容都是第一加载 用户不会加载进来的页面。例如：详情、支付等等
        这里分包home
      </View>
    )
  }
}
