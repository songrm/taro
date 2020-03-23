import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

type props = {
  data: {
    name:string
  }[],
  onLeft(obj):void
}
type state = {
  currentIndex:number
}

export default class left extends Component<props, state> {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  onCurrentIndex(i,obj){
    this.setState({
      currentIndex: i
    })

    this.props.onLeft(obj)
  }
  render () {
    const {data} = this.props
    return (
      <View className="left">
        {data && (
          data.map((list,index) => {
            return (
              <View key={index} className={this.state.currentIndex === index ? 'active name' : 'name' } onClick={this.onCurrentIndex.bind(this, index,list)}>
                {list.name}
              </View>
            )
          })
        )}
      </View>
    )
  }
}
