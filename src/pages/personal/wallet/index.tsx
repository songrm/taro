import Taro,{useState,useReachBottom,useEffect, useRef, usePageScroll} from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import {Y,Empty,Tabs,TabsPane} from '@/components/index'
import CashList from './components/list'
import CommissionList from './components/commissionList'
import { NavigationBar, PageNavigationContainer } from '@/components'
import './index.less'

// 图片

// import CashOut from '@/asset/icon/cashOut.png'


const Wallet = ()=>{
  const [current, setcurrent] = useState(0)

  const walletData = [
    {
      name:'累计收益',
      money:'123'
    },{
      name:'累计收益',
      money:'123'
    },
    {
      name:'预计本月收益',
      money:'1232'
    },
    {
      name:'预计今日收益',
      money:'1223'
    }
  ]
  const tabList = [{ title: '返现' }, { title: '佣金' }]

  const cashList =[{
    id:'0000',
    cash:'2.19',
    state: '未到账',
    logo:'log',
    totle:'26.8',
    time:'2020/01/12 11:11'
  },{
    id:'0000',
    cash:'2.19',
    state: '未到账',
    logo:'log',
    totle:'26.8',
    time:'2020/01/12 11:11'
  }]

  const among = [{
    id:'12',
    logo:'https://img.tebiemiao.cn/1582617226824.jpg',
    name:'张三',
    vacation:'009'
  }]

  useEffect(() => {
    // const title = '我的钱包'
    // Taro.setNavigationBarTitle({ title })
  }, [])

  useReachBottom(() => {
    console.log('onReachBottom')
  })
  const tabChange =(e) =>{
    setcurrent(e)
  }

  const scroll = useRef<any>(null)

  // 页面滚动
  usePageScroll((e) => {
    scroll.current(e.scrollTop)
  })
  return (
    <PageNavigationContainer>

    <NavigationBar
      hasBack
      title="我的钱包"
      color='#ffffff'
      gradientColor='#fff'
      backgroundColor='#2d2d2d'
      gradientHeight={50}
      scroll={scroll}
    />

    <View className='wallet-per'>
      <View className='wallet-per-top'>
        <Text className='text'>账户余额</Text>
        <View className='money'>
          <View className='money-left'>
            <Y />200.00
          </View>
          <View className='money-right' onClick={()=>{
            Taro.navigateTo({url:'/pages/personal/cashOut/index'})
          }}>
            {/* <Image src={CashOut} className='image' mode='widthFix' /> */}
            去提现
          </View>
        </View>

        <View className='wallet-dec'>
          {walletData.map((list)=>{
            return (
              <View className='list' key={list.name}>
                <View className='list-txt'>
                  {list.name}
                </View>
                <View className='list-y'>
                  <Y />{list.money}
                </View>
              </View>
            )
          })}
        </View>
      </View>

      <Tabs tabList={tabList} current={current} onClick={(obj)=>setcurrent(obj)}>
        <TabsPane current={current} index={0} >
          {cashList.length !== 0 ? (
            <CashList cashList={cashList} />
          ):(
            <Empty />
          )}

        </TabsPane>
        <TabsPane current={current} index={1}>

          {among.length !== 0? (
            <CommissionList among={among} />
          ): (
            <Empty />
          )}
        </TabsPane>
      </Tabs>
    </View>
    </PageNavigationContainer>
  )
}
Wallet.config = {
  navigationStyle: 'custom'
}
export default Wallet
