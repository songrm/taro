import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

type props = {
  amount: number
  onGocart():void
}
type state = {}

export default class cart extends Component<props, state> {
  constructor(props) {
    super(props)
    this.onGocart= this.onGocart.bind(this)
  }
  onGocart(){
    this.props.onGocart()
  }
  render () {
    return (
      <View className={this.props.amount===0 ? "none cart" :'cart'} onClick={this.onGocart}>
        {this.props.amount}
      </View>
    )
  }
}
