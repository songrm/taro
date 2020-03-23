import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'

import "taro-ui/dist/style/components/flex.scss"
import './index.scss'

type props = {
  columnNum: number,
  title?:string,
  data: {
    id:string   // id
    name:string  // 名称
    price:number  // 价格
    stock:number  // 库存
    des:string  // 描述
    category:string  // 类别
    categoryID:string  // 类别id
    url:string   // 图片
    limit:number  // 限购  0不限购
    specialPrice:string // 活动价格
  }[],
  onHomeList(obj):void
}
type state = {}

export default class homeList extends Component<props, state> {
  homeList(list){
    this.props.onHomeList(list)
  }
  render () {
    const {data,columnNum,title} = this.props
    const num = Number(12/columnNum)
    return (
      <View className="homeList">
        {title && (
          <View className='title'>
            {title}
          </View>
        )}

        <View className='at-row at-row--wrap'>
          {data.map((list,index) => {
            return (
              <View className={`at-col at-col-${num}`} key={index} onClick={this.homeList.bind(this,list)}>

                {list.name && (
                  <View className='homeList__txt'>
                    <View className='homeList__imageDiv'>
                      <Image src={list.url} mode='widthFix' className='homeList__image' />
                    </View>

                    <View className='h3'>{list.name}</View>
                    <View className='content'>
                      <View className='txt'><text>${list.price}</text></View>

                      <View>
                        <Text className='tag'>优惠</Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            )
          })}
        </View>

      </View>
    )
  }
}
