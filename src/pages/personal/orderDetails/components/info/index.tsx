import Taro from '@tarojs/taro'
import { View,Text } from "@tarojs/components"
import './index.less'


interface infoProp{
  title?:string
  children:any
}
const Info = ({title,children}:infoProp) =>{
  return (
    <View className='main'>
        <View className='wrapper'>
          <View className='wrapper-title'>{title}</View>
          {children}
          {/* {dataInfo.map(list=>{
            return (
              <View className='info' key={list.nae}>
                <Text className='info-key'>{list.name}</Text>
                <Text className='info-value'>{list.des}</Text>
              </View>
            )
          })} */}

        </View>
      </View>
  )
}

Info.options = {
  addGlobalClass: true,

}

export default Info
