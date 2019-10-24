import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import "taro-ui/dist/style/components/flex.scss"
import './index.scss'

type props = {
  data:{name:string}[]
}
type state = {}

export default class right extends Component<props, state> {
  render () {
    const {data} = this.props
    return (
      <View className="right">
        <View className='at-row at-row--wrap'>
          {data && (
            data.map((list,index) => {
              return (
                <View className='at-col at-col-4' key={index}>
                  <View className='rightImage'></View>
                  <View className='name'>{list.name}</View>
                </View>
              )
            })
          )}
          <View className='at-col at-col-4'>
            <View className='rightImage'></View>
            <View className='name'>描述描述</View>
          </View>
          {/* <View className='at-col at-col-4'>B</View>
          <View className='at-col at-col-4'>C</View> */}
        </View>
      </View>
    )
  }
}
