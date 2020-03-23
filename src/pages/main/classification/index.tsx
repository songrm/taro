import Taro, { Component,Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Left from './components/left/index'
import Right from './components/right'

import './index.scss'
import { InputNumber } from '@/components'

type props = {}
type state = {}

export default class classIfication extends Component<props, state> {
  config: Config = {
    navigationBarTitleText: '分类',
    navigationBarBackgroundColor: "" || '#999',
    navigationBarTextStyle: 'white'
  }
  onLeft(obj){
    console.log(obj,'点击了左侧')
  }

  ww(){
    const day = 31
    const month = 8
    const year = 2019
    const data = new Date(`${year}-${month}-${day}`)
    const m ={0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}
    console.log(m[data.getDay()])
  }

  componentDidMount(){
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#454545'
    });
    // Taro.setNavigationBarColor({
    //   navigationBarBackgroundColor: '#000'
    // })
    // this.config.navigationBarBackgroundColor = '#000'
    this.ww()
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
