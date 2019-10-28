import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

type props = {}
type state = {}

export default class order extends Component<props, state> {
  render () {
    return (
      <View className="order">
        order
      </View>
    )
  }
}
