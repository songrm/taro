import { View,Text, Button } from "@tarojs/components"
import './index.less'
import { useEffect, useState } from "@tarojs/taro"
import CouponList from '../components/couponList'
import { Empty } from '@/components/index'




interface list {
  id:string,
  name:string
}
const Coupon =() => {
  const [couponData, setcouponData] = useState<list[] | null>(null)
  const data =[{
    id:'000',
    name:'分享油客生鲜专用券'
  },{
    id:'0002',
    name:'分享油客生鲜专用券2'
  }]

  useEffect(() => {
    const title = '优惠券'
    Taro.setNavigationBarTitle({ title })

    setcouponData(data)
  }, [])


  return(
    <View className='coupon-total'>
      {couponData ? (
        couponData.map(list=>{
          return (
            <CouponList dataList={list} key={list.id}/>
          )
        })
      ):(
        <Empty />
      )}
      <View className='record'>
        <Button className='theme-submit' onClick={()=> Taro.navigateTo({url:'/pages/personal/couponRecord/index'})}>优惠券使用记录</Button>
        {/* <AtButton type='primary' onClick={()=> Taro.navigateTo({url:'/pages/personal/couponRecord/index'})}>优惠券使用记录</AtButton> */}
      </View>
    </View>
  )
}

Coupon.options={
  addGlobalClass: true
}
export default Coupon
