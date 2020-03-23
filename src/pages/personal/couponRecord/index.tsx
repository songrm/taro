import { AtTabs, AtTabsPane } from 'taro-ui'
import "taro-ui/dist/style/components/tabs.scss";
import { View } from '@tarojs/components';
import { useState,useEffect } from '@tarojs/taro';
import {Empty} from '@/components/index'
import CouponList from '../components/couponList'


interface list {
  id:string,
  name:string
}

const CouponRecord = () => {
  const [current, setcurrent] = useState(0)
  const [couponData, setcouponData] = useState<list[] | null>(null)
  const tabList = [{ title: '已使用' }, { title: '已过期' }]

  const data =[{
    id:'000',
    name:'分享油客生鲜专用券'
  }]

  useEffect(() => {
    const title = '优惠券使用记录'
    Taro.setNavigationBarTitle({ title })

    setcouponData(data)
  }, [])

  return (
    <View>
      <AtTabs current={current} tabList={tabList} onClick={(e)=>{setcurrent(e)}}>
        <AtTabsPane current={current} index={0} >
         {couponData ? (
            couponData.map(list=>{
              return (
                <CouponList dataList={list} key={list.id}/>
              )
            })
          ):(
            <Empty />
          )}

        </AtTabsPane>
        <AtTabsPane current={current} index={1}>

          {couponData ? (
            couponData.map(list=>{
              return (
                <CouponList dataList={list} key={list.id}/>
              )
            })
          ):(
            <Empty />
          )}
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}

export default CouponRecord
