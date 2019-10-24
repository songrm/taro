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
        <Image src={require('./none.png')} className='img'></Image>
        空空如也
      </View>
    )
  }
}
