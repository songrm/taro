import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import "taro-ui/dist/style/components/flex.scss";
import './index.scss'

type props = {
  columnNum: number,
  data: {value:string,image:string,tag?:string}[],
  hasBorder?: boolean,
  onGridAuto(obj): void
}
type state = {}

export default class gridAuto extends Component<props, state> {
  gridAuto(obj){
    this.props.onGridAuto(obj)
  }
  render () {
    const { columnNum, data} = this.props
    // columnNum  12346
    const num = Number(12/columnNum)
    return (
      <View className="gridAuto">
        <View className='at-row at-row--wrap'>
          {data.map((list,index) => {
            return (
              <View className={`at-col at-col-${num}`} key={index} onClick={this.gridAuto.bind(this,list)}>
                {list.tag && (
                  <View className='tag'>{list.tag}</View>
                )}
                <Image src={list.image} className='gridAuto__image' />
                {list.value && (
                  <View>{list.value}</View>
                )}
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
