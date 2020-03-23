import Taro, { useState, useEffect, useRef, usePullDownRefresh, usePageScroll } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'


import Mywallet from './components/myWallet/index'
import Myorder from './components/myOrder/index'
import Cart from './components/myCart/index'
import { NavigationBar } from '@/components/index'
import './index.less'

// const useCurrentValue = (val) => {
//   const ref = useRef(val);
//   useEffect(() => {
//       ref.current = val;
//   }, [val]);
//   return ref
// }

function Personal() {

  const scroll = useRef<any>(null)

  const cartData=[
    {
      id:12,
      icon:'https://img.tebiemiao.cn/1582617226824.jpg',
      title:'优惠券',
      url:'/pages/personal/coupon/index',
      dec:'3张可用'
    },{
      id:122,
      icon:'https://img.tebiemiao.cn/1582617226824.jpg',
      title:'收货地址',
      url:'/pages/personal/address/index',
      dec:''
    },{
      id:1222,
      icon:'https://img.tebiemiao.cn/1582617226824.jpg',
      title:'关于我',
      url:'1',
      dec:''
    },{
      id:12222,
      icon:'https://img.tebiemiao.cn/1582617226824.jpg',
      title:'帮助与客服',
      url:'1090909009',
      dec:''
    }

  ]
  const orderData = [
    {
      name:'待支付',
      icon:'&#xe6a4;',
      number:1,
      url:'/pages/personal/order/index?type=created'
    },{
      name:'待收货',
      icon:'&#xe615;',
      number:1,
      url:'/pages/personal/order/index?type=received'
    },{
      name:'已完成',
      icon:'&#xe652;',
      number:1,
      url:'/pages/personal/order/index?type=success'
    },{
      name:'退款',
      icon:'&#xe64c;',
      number:0,
      url:'/pages/personal/order/index?type=drawback'
    }
  ]

  const [walletList,setwalletList] = useState<any>([])

  const [cartlist] = useState(cartData)
  const [isClickShow, setisClickShow] = useState(false)

  const walletData = [
    {
      name:'回馈金',
      money:'123'
    },
    {
      name:'优惠金',
      money:'10'
    },
    {
      name:'红包',
      money:'20'
    }
  ]



  usePullDownRefresh(()=>{
    console.log('下拉')
  })

  // 页面滚动
  usePageScroll((e) => {
    scroll.current(e.scrollTop)
  })
  useEffect(() => {
    // const title = '我的'
    // Taro.setNavigationBarTitle({ title })

    setwalletList([...walletData])
    // setcartlist(cartData)
  }, [orderData, walletData])


  const numberAuth = () => {
    // 先判断是否已认证
    Taro.navigateTo({ url: `/pages/personal/authentication/index` })
  }

  return (

    <View className='personal-wrap'>
      <View className='bg'>
        <NavigationBar
          title="我的"
          color='#ffffff'
          gradientColor='#000000'
          backgroundColor='#ffffff'
          gradientHeight={255}
          scroll={scroll}
        />
          <View className='top'>
            <Image src='https://img.tebiemiao.cn/1582617226824.jpg' mode='widthFix' className='image' />
            <View className='text'>
              <View className='wechat'>
                宋有钱
                <Text className='iconfont refresh'>&#xe842;</Text>
              </View>
              <View onClick={()=>numberAuth()}>
                登录
              </View>
            </View>
          </View>
      </View>


      {/* 我的订单 */}

      <View className='wallet mar-top'>
        <View className='money' onClick={()=>{Taro.navigateTo({ url: `/pages/personal/order/index` })}}>
          <View className='left'>我的订单</View>
          <View className='right'>查看全部订单 <Text className='info-arrow iconfont'> &#xe61b; </Text></View>
        </View>
        <View className='wallet-dec'>
          {orderData && (
            orderData.map((list)=>{
              return (
                <View className='o-l' key={list.name}>
                  <Myorder orderList={list} />
                </View>

              )
            })
          )}
        </View>
      </View>

      <View className='wallet'>
        <View className='money' onClick={()=> {Taro.navigateTo({ url: `/pages/personal/wallet/index` })}}>
          <View className='left'>我的钱包</View>
          <View className='right'>钱包 <Text className='info-arrow iconfont'> &#xe61b; </Text></View>
        </View>
        <View className='wallet-dec'>
          {walletList && (
            walletList.map((list)=>{
              return (
                <View className='w-l' key={list.title}>
                  <Mywallet walletList={list} />
                </View>

              )
            })
          )}
        </View>
      </View>

      <View className='myCard'>
        {cartlist.map(list=>{
          return (
            <View key={list.id}>
              <Cart cartlist={list} key={list.title} />
            </View>

          )
        })}
      </View>

    </View>

  );
}
Personal.config = {
  navigationStyle: 'custom'
}
Personal.options = {
  addGlobalClass: true,
}

export default Personal


