import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView } from '@tarojs/components'

import './index.scss'
type props = {}
type state = {
  scrollLeft: number
}

export default class demo extends Component<props, state> {
  constructor(props){
    super(props)
    this.state={
      scrollLeft:0
    }
  }
  componentDidMount(){

  }
  componentWillMount(){

  }
  onScrollToUpper(){

  }
  onScroll(){

  }
  ww(num,e){
    console.log(num,e)
    const query = Taro.createSelectorQuery()
          query.select('.aa').boundingClientRect().exec(res => {
            console.log(res,'====')
          })

    console.log(query, '=-=-=')

    this.setState({
      scrollLeft:e.target.offsetLeft-50
    })
  }
  bb(e) {
    console.log(e)
  }
  render () {
    const scrollStyle = {
      height: '100px'
    }

    const Threshold = 20

    return (
      <View className="demo">
        <ScrollView
        className='scrollview'
        scrollX
        scrollWithAnimation
        scrollLeft={this.state.scrollLeft}

        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
        onScroll={this.onScroll}
      >
        <View id='#aa' className='aa' onClick={this.ww.bind(this,1)}>A</View>
        <View className='aa' onClick={this.ww.bind(this,2)}>BF</View>
        <View className='aa' onClick={this.ww.bind(this,3)}>C</View>
        <View className='aa' onClick={this.ww.bind(this,4)}>D</View>
        <View className='aa' onClick={this.ww.bind(this,5)}>E</View>
      </ScrollView>
      <ScrollView
        className='scrollview01'
        scrollY
        scrollWithAnimation
      >
        <View className='bb' onClick={this.bb.bind(this)}>A</View>
        <View className='bb' onClick={this.bb.bind(this)}>B</View>
        <View className='bb' onClick={this.bb.bind(this)}>C</View>
        <View className='bb' onClick={this.bb.bind(this)}>D</View>
        <View className='bb' onClick={this.bb.bind(this)}>E</View>
      </ScrollView>
      </View>
    )
  }
}
