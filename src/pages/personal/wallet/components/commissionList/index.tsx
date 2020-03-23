import { View,Text,Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'

interface list{
  id:string,
  logo:string,
  name:string,
  vacation:string
}
interface commissionProps {
  among:list[]
}
const CommissionList = ({among}:commissionProps) => {
  return (
    <View className='commission-all'>
      {among.map((list,index)=>{
        return (
          <View className='commission' key={index}>
            <View className='commission-image'>
              <Image src={list.logo} className='image' mode='widthFix' />
            </View>
            <View className='commission-name'>{list.name}</View>
            <View className='commission-dec'>
              <View className='marginBottom'>已到账：¥{list.vacation}</View>
              <View>未到账：¥{list.vacation}</View>
            </View>
        </View>
        )
      })}
    </View>

  )
}

CommissionList.options = {
  addGlobalClass: true,

}
export default CommissionList
