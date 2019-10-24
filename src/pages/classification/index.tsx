import Taro, { Component,Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Left from './components/left/index'
import Right from './components/right'

import './index.scss'

type props = {}
type state = {}

export default class classIfication extends Component<props, state> {
  config: Config = {
    navigationBarTitleText: '分类'
  }
  onLeft(obj){
    console.log(obj,'点击了左侧')
  }
  render () {
    return (
      <View className="classIfication">
        {/* classIfication */}
        <View className='left'>
          <Left onLeft={this.onLeft} data={[
            {name:'推荐专区'},
            {name:'秋冬好物'},
            {name:'推荐专区'}
            ]} />
        </View>
        <View className='right'>
          <Right data={[
            {name:'推荐专区'},
            {name:'秋冬好物'},
            {name:'家居生活'},
            {name:'酒水饮料'},
            {name:'主题好品'}
            ]}/>
        </View>
      </View>
    )
  }
}
