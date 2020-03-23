import { View,Text } from "@tarojs/components"
import './index.less'

interface ListData {
  title?:string
  children:any
}
const List =(props:ListData)=>{
  const {title,children} = props
  return (
    <View className='info'>
      <Text className='info-key'>{title}</Text>
      <View className='info-value'>
        {children}
      </View>
    </View>
  )
}
List.options={
  addGlobalClass: true,
}
export default List
