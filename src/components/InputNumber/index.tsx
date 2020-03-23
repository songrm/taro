import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.less'

type props = {
  dispatch?:any,
  dataList:{
    id?: string;
    name?: string;
    list?: any;
    number?:number
  }

  items?:any
  goodsItems?:any
}
type state = {}

@connect(({cart}) => ({
  ...cart
}))

export default class InputNumber extends Component<props, state> {
  static options = {
    addGlobalClass: true
  }
  onAdd(data){
    this.props.dispatch({
        type: 'cart/addCart',
        payload: {
          ...data
        }
    })

    console.log(this.props.items,'itemsitemsitems')
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
    const {items,goodsItems,dataList} = this.props

    return (
      <View className="InputNumber">
        {(goodsItems.number!==0 && goodsItems.number !== undefined) && (
          <View className='reduceCart input iconfont' onClick={this.onReduce.bind(this,dataList)}>&#xe645;</View>
        )}

        {(goodsItems.number!==0 && goodsItems.number !== undefined) && (
          <View className='input'>{dataList.number}</View>
        )}
        <View className='addCart input iconfont' onClick={this.onAdd.bind(this,dataList)}>&#xe60b;</View>
      </View>
    )
  }
}
