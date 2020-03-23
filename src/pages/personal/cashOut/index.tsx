import { View,Text } from "@tarojs/components"
import { useEffect } from "@tarojs/taro"
import {Y,Empty} from '@/components/index'
import CashOutList from './components/list/index'
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";
import './index.less'

const CashOut =()=>{
  useEffect(() => {
    const title = '余额'
    Taro.setNavigationBarTitle({ title })
  }, [])
  const CashOutData = [
    {
      id:'101010',
      money:'90',
      time:'2019-09-09',
      state:'start'
    },{
      id:'101012',
      money:'90',
      time:'2019-09-09',
      state:'end'
    }
  ]
  return (
    <View className='cash-out'>
      <View className='cash-out-top'>
        <Text className='title'>可提现金额</Text>
        <View className='cash-out-money'>
          <View className='money'><Y />1009</View>
          <View className='wechatBottom'>提现至微信</View>
        </View>
      </View>
      <View className='detailed'>
        <Text className='detailed-title'>提现明细</Text>
        {/* {CashOutData.length !==0 ?(<CashOutList CashOutData={CashOutData} />):(<Empty />)} */}
        {  CashOutData ?(
          CashOutData.map((list,index)=>{
            return (
              <CashOutList key={list.id} CashOutData={list} />
            )
          })

        ):(<Empty />)}

      </View>
    </View>
  )
}
export default CashOut
