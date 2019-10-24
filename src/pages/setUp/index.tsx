import Taro, { Component,Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

import "taro-ui/dist/style/components/list.scss"
import "taro-ui/dist/style/components/icon.scss"
import './index.scss'

type props = {}
type state = {}

export default class setUp extends Component<props, state> {
  config: Config = {
    navigationBarTitleText: '设置'
  }
  render () {
    return (
      <View className="setUp">
        <View className='person'>
          <View className='person_img'></View>
          <View className='person_name'>我的名称</View>
          <View className='des'>做自己喜欢的事</View>
        </View>

        <View className='setUp_modu'>
          <View className='setUp_modu_txt'>当日代办事项</View>
          <AtList hasBorder={false}>
            <AtListItem hasBorder={false} title='未处理对话' arrow='right'/>
            <AtListItem hasBorder={false} title='收货地址未完善' arrow='right' />
            <AtListItem hasBorder={false} title='未付款' extraText='2' />
          </AtList>
        </View>
      </View>
    )
  }
}
