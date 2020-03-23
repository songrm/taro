import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, View,Image } from '@tarojs/components'
import { getNavigationBarHeight } from '@/utils/app'
import './index.less'

type props = {}
type state = {
  current:number
  top_h:number
}

export default class swiper extends Component<props, state> {

  constructor(props){
    super(props)
    this.state={
      current:0,
      top_h:0
    }
  }

  aa(e){
    console.log(e)
  }
  onCplio(e){
    // console.log(e.detail.current)
    this.setState({
      current:e.detail.current
    })
  }

  async componentDidMount(){
    // getNavigationBarHeight().then(res => {
    //   res.statusBarHeight
    //   res.contentHeight
    // })
   const {statusBarHeight,contentHeight} =  await getNavigationBarHeight()
   this.setState({
    top_h: (statusBarHeight+contentHeight)
   })
  }
  render () {
    // const m= [{name:'1'},{name:'2'},{name:'3'}]
    return (
      <View className="swiper">
        <Swiper
        className='test-h'
        indicatorColor='#999'
        onChange={this.onCplio.bind(this)}
        indicatorActiveColor='#de1922'
        circular
        autoplay={true}
        current={this.state.current}
        indicatorDots>
        <SwiperItem>
          <View className='demo-text-1' >
            <View style={{height: `${this.state.top_h}px`}}></View>
            <Image  src='https://www.beibeihe.com/f1/b1.png' className='image' mode='widthFix' />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>
          <View style={{height: `${this.state.top_h}px`}}></View>
            <Image  src='https://www.beibeihe.com/f1/b1.png' className='image' mode='widthFix' />
          </View>
        </SwiperItem>
        {/* <SwiperItem>
          <View className='demo-text-3'>
            <View style={{height: `${this.state.top_h}px`}}></View>
            <Image  src='https://www.beibeihe.com/f1/b1.png' className='image' mode='widthFix' />
          </View>
        </SwiperItem> */}
      </Swiper>
      </View>
    )
  }
}
