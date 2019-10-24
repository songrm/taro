import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.scss'

type props = {
  dispatch?:any,
  dataList:{
    id: string;
    number?: number;
    amount: number;
  }
}
type state = {}

@connect(({cart}) => ({
  ...cart
}))

export default class InputNumber extends Component<props, state> {
  onAdd(data){
    this.props.dispatch({
        type: 'cart/addCart',
        payload: {
          ...data
        }
    })
  }

  onReduce(data){
    this.props.dispatch({
      type: 'cart/reduceCart',
      payload: {
        ...data
      }
    })
  }

  componentDidMount(){

  }

  render () {
    const {dataList} = this.props
    return (
      <View className="InputNumber">
        <View className='reduceCart input' onClick={this.onReduce.bind(this,dataList)}>-</View>
        <View className='input'>{dataList.number}</View>
        <View className='addCart input' onClick={this.onAdd.bind(this,dataList)}>+</View>
      </View>
    )
  }
}
