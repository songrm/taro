import { View,Text,Image, Button, Canvas } from "@tarojs/components"
import Taro, { useEffect, useState,useRouter, useShareAppMessage, useRef, usePageScroll } from "@tarojs/taro"
import {Y,Countdown} from '@/components/index'
// import PickupCode from '@/appComponents/PickupCode'
import { NavigationBar } from '@/components'
import Info from './components/info'
import List from './components/list'

import './index.less'
import Poster from './components/poster/index'
import InvitationMode from './components/invitationMode/index'


const OrderDetails = () => {

  const test = {
    success: '已完成',
    created: '待支付',
    payed: '待接单',
    dispatched: '配送中',
    received: '待收货',
    group:'待成团',
    canceled: '已取消',
    close: '已关闭',
    refund: '退款中'
  }

  const {
    params: {id}
  } = useRouter()

  console.log(id,'路由传参')

  const data = {
    id:'123123',
    status: 'group'
  }

  const [orderData, setorderData] = useState(data)
  const [isClickShow, setisClickShow] = useState(false)
  const [isinvitation, setisinvitation] = useState(false)

  // 控制海报显示
  const [showPoster, setshowPoster] = useState<boolean>(false)



  const info ={
    name:'---',
    lineMoney:'100',
    goodsImage:'https://img.tebiemiao.cn/1582617226824.jpg',
    activityName:'activityName',
    goodsSoldPoint:'goodsSoldPoint',
    moneyFixed: '100'
  }

  const colsePopup =() => {
    setisClickShow(false)
  }

  useEffect(() => {
  //  Taro.setNavigationBarTitle({title:'订单详情'})
   Taro.hideShareMenu()
  }, [])

  useShareAppMessage(res => {
    console.log(res)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
      return {
        title: '自定义1111转发标题',
        imageUrl: '',
        path: '/page/user?id=123'
      }
    }
    return null
  })

  // 邀请好友
  const invitation =() =>{
    setisinvitation(true)
  }

  // 朋友圈
  const wechatMoments = () =>{
    setshowPoster(true)

    setisinvitation(false)
  }

  const scroll = useRef<any>(null)
  // 页面滚动
  usePageScroll((e) => {
    scroll.current(e.scrollTop)
  })

  const style ={
    color:'#fff',
    fontSize:'26px',
    fontWeight:500
  }
  return(
    <View className='orderDetails'>

      <View className='orderDetaild-top'>
        <NavigationBar
            hasBack
            title="订单详情"
            color='#ffffff'
            gradientColor='#000000'
            backgroundColor='#ffffff'
            gradientHeight={255}
            scroll={scroll}
        />

        <View className='title'>{test[data.status]}</View>
        {data.status === 'created' && (
          // 待支付

          <View className='created'>
            订单将在
            <Countdown styleProps={style} endTime='2020-05-15 00:12:00' />后自动关闭
          </View>
        )}


      </View>

      {data.status === 'group' && (
          // 待成团
          <View className='group'>
            <View className='group-name'>还差1人拼成</View>
            <View className='group-time'>剩余时间<Countdown endTime='2020-05-15 00:12:00' />后结束</View>
            <View className='group-image'>
              <Image src='https://img.tebiemiao.cn/1582617226824.jpg' mode='widthFix' className='image' />
              <Image src='https://img.tebiemiao.cn/1582617226824.jpg' mode='widthFix' className='image' />
            </View>
          </View>
        )}

      <View className='goods-details-warp'>
        <View className='goods-details'>
          <View className='goods-details-image'>
            <Image src='https://img.tebiemiao.cn/1582617226824.jpg' mode='widthFix' className='image'></Image>
          </View>
          <View className='goods-details-des'>
            <View className='goods-name'>自提点,自提点,自提点,自提点,自提点,自提点,自提点,自提点</View>
            <View className='goods-attr'>
              <Text className='tag'>食用植物调和油</Text>
            </View>
            <View className='goods-price'>
              <Text className='price'>¥15.9</Text>
              <Text className='num'>x2</Text>
            </View>
          </View>
        </View>
      </View>

      <View className='contact'>联系客服</View>

      <View className='goods-des'>
        <List title='商品金额'>
          <View className=''> <Y />1222</View>
        </List>
        <View className='line'></View>
        <List title='优惠券'>
          <View className=''> <Y />1222</View>
        </List>
        <List title='运费'>
          <View className=''> <Y />1222</View>
        </List>
        <View className='line'></View>
        <List title=''>
          <View className='info-value'>
            <View className='price'>
              合计: <Y />
              <Text className='num'>26.8</Text>
            </View>

            <View className='purchase'>购返<Y />1</View>
          </View>
        </List>
      </View>


      <Info title='自提'>
        <List title='自提点'>
          <Text className='info-value'>1222</Text>
        </List>
        <List title='详细地址'>
          <Text className='info-value'>1222</Text>
        </List>
        <List title='收货人'>
          <Text className='info-value'>1222</Text>
        </List>
        <List title='手机号'>
          <Text className='info-value'>1222</Text>
        </List>
      </Info>

      <Info title='配送上门'>
        <List title='收货人'>
          <Text className='info-value'>1222</Text>
        </List>
        <List title='手机号码'>
          <Text className='info-value'>1222</Text>
        </List>
        <List title='收货地址'>
          <Text className='info-value'>1222</Text>
        </List>
      </Info>
      <Info title='订单信息'>
        <List title='订单单号'>
          <Text className='info-value'>1222</Text>
        </List>
        <List title='下单时间'>
          <Text className='info-value'>1222</Text>
        </List>
        <List title='支付方式'>
          <Text className='info-value'>1222</Text>
        </List>
        <List title='买家备注'>
          <Text className='info-value'>1222</Text>
        </List>
      </Info>
      <View className='bottom'>
          {data.status === 'created' && (
            <Button className='status_but btn1'>立即支付</Button>
          )}
          {data.status === 'group' && (
            <View>
              <Button className='status_but btn2'>申请退款</Button>
              <Button className='status_but btn3' onClick={()=>invitation()}>邀请好友</Button>
            </View>
          )}
          {(data.status === 'received' || data.status === 'refund') && (
            <View>
              <Button className='status_but btn2'>申请退款</Button>
              <Button className='status_but btn2' onClick={()=>setisClickShow(true)}>提货二维码{isClickShow}</Button>
            </View>
          )}

      </View>

       {/* 提货二维码 */}
       {/* <PickupCode isClickShow={isClickShow}  handleClick={colsePopup} /> */}

       {/* 邀请好友 */}
       <InvitationMode isOpened={isinvitation} handclick={wechatMoments} close={()=>setisinvitation(false)} />

       {/* 海报 */}
        {showPoster && (
          <Poster
            info={info}
            qrcode='https://img.tebiemiao.cn/1582617226824.jpg'
            logo='https://img.tebiemiao.cn/1582617226824.jpg'
            onClose={() => {
              setshowPoster(false)
            }}
          />
        )}
    </View>
  )
}
OrderDetails.options = {
  addGlobalClass: true,

}
OrderDetails.config = {
  navigationStyle: 'custom'
}
export default OrderDetails
