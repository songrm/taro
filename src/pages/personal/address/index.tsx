import { View, Button } from '@tarojs/components'
import Taro, { useEffect } from '@tarojs/taro'

import './index.less'

// import Demo from '../components/demo/demo'

// import Awdd from '../components/SwipeAction/index'

import { AtSwipeAction } from "taro-ui"
import "taro-ui/dist/style/components/swipe-action.scss"

const Address = () =>{
  useEffect(() => {
    Taro.setNavigationBarTitle({title:'收货地址'})
  }, [])

  const data =[{
    contactName:'张三2'
  },{
    contactName:'张三3'
  }]
  return (
    <View className='address'>

      {data.map(list=>{
        return (
          <AtSwipeAction  options={[
            {
              text: '设为默认',
              style: {
                backgroundColor: '#6190E8'
              }
            },
            {
              text: '删除',
              style: {
                backgroundColor: '#FF4949'
              }
            }
          ]}>
          <View className='AddressItem' key={list.contactName} onClick={()=> Taro.navigateTo({url:`/pages/personal/editAddress/index?mode=edit&contactName=${list.contactName}`})}>
            <View className='itemLeft'>
              <View className='itemInfo df-c'>
                <View className='itemName'>{list.contactName}</View>
                <View className='itemNumber'>18767876789</View>

                <View className='itemDefault'>默认</View>
              </View>
              <View className='itemAddress'>北京北京市海淀区温泉镇中关村创客小镇11号楼3单元1146室</View>
            </View>
          </View>
          </AtSwipeAction>
        )
      })}

      <View className='record'>
        <Button className='record-btn' onClick={()=> Taro.navigateTo({url:'/pages/personal/editAddress/index?mode="add"'})}>
          新增收货地址
        </Button>
      </View>
    </View>

  )
}
export default Address
