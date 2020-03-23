import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

type props = {
  data:string
}
type state = {}

export default class info extends Component<props, state> {
  render () {
    return (
      <View className="info">
        {this.props.data}
      </View>
    )
  }
}
