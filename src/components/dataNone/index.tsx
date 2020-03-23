import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'


import './index.scss'


type props = {}
type state = {
  imgSrc:string
}

export default class dataNone extends Component<props, state> {
  constructor(){
    super()
    this.state={
      imgSrc:'12'
    }
  }
  render () {
    return (
      <View className="dataNone">
        暂无数据
      </View>
    )
  }
}
