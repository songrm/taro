import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import {DataNone} from '../../component'
import './index.scss'

type props = {}
type state = {
  data:any
}

export default class classPage extends Component<props, state> {
  constructor(props){
    super(props)
    this.state = {
      data:[
        {title:'这些被员工买爆的好货，都被带去了互联网大会！',src:'https://img.tebiemiao.com/1571811694451.jpg',look:'222'},
        {title:'',src:'https://img.tebiemiao.com/1571811694451.jpg',look:'52'},
        {title:'两种意见 | 终于找到了一款颜值在线的保温杯',src:'https://img.tebiemiao.com/1571811694451.jpg', describe:'限时7折'},
        {title:'',src:'https://img.tebiemiao.com/1571811694451.jpg'},
        {title:'科技宅、爱运动、有品位，让你们见识一下什么是真正的高知程序员魅力！',src:'https://img.tebiemiao.com/1571811694451.jpg',look:'2'}
      ]
    }
  }
  render () {
    return (
      <View className="classPage">
        {this.state.data ? (
          <View>
            {this.state.data.map((list,index)=>{
          return (
            <View key={index} className='classPage_list'>
              {list.describe ? (
                <View className='left'>
                  <View>
                    {list.title && (
                      <View className='classPage_list_title'>{list.title}</View>
                    )}
                    {list.describe && (
                      <View className='desc'>{list.describe}</View>
                    )}

                  </View>

                  <View className='u-pic'>
                    <Image src={list.src} mode='widthFix' className='img'></Image>
                  </View>
              </View>
              ):(
                <View>
                {list.title && (
                  <View className='classPage_list_title'>{list.title}</View>
                )}

                <View className='u-pic'>
                  <Image src={list.src} mode='widthFix' className='img'></Image>
                </View>
                {list.look && (
                  <View className='u-rcount'>{list.look} k看过</View>
                )}
              </View>
              )}

            </View>
            )
          })}
          </View>

        ):(
          <DataNone />
        )}

      </View>
    )
  }
}
