import Taro from '@tarojs/taro'
import { View } from "@tarojs/components"
import classnames from 'classnames'
import './index.less'

interface list {
  children:any
  index: number
  current: number
}

const TabsPan = ({children,index,current}:list) => {
  return (
    <View
        className={
          classnames({
            'tabs-pane': true,
            'tabs-pane--active': index === current,
            'tabs-pane--inactive': index !== current
          })
        }
      >
        {children}
      </View>
  )
}

export default TabsPan
