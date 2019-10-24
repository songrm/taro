import Taro, { Component,Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

type props = {}
type state = {}

export default class distinguish extends Component<props, state> {
  config: Config = {
    navigationBarTitleText: '识物'
  }
  render () {
    return (
      <View className="distinguish">
        distinguish
        这里是识物
      </View>
    )
  }
}
