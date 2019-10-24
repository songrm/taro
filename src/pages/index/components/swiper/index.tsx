import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, View } from '@tarojs/components'
import './index.scss'

type props = {}
type state = {}

export default class swiper extends Component<props, state> {
  render () {
    return (
      <View className="swiper">
        <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#de1922'
        circular
        indicatorDots>
        <SwiperItem>
          <View className='demo-text-1'></View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'></View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'></View>
        </SwiperItem>
      </Swiper>
      </View>
    )
  }
}
