import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'

import './index.less'

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
                  <View className='rightImage'>
                    <Image src='https://www.beibeihe.com/f1/helloworld.jpg' mode='widthFix' className='image' />
                  </View>
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
