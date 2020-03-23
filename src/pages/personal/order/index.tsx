import { View } from "@tarojs/components"
import Taro,{ useEffect, useState,useRouter, usePullDownRefresh, useReachBottom, usePageScroll } from "@tarojs/taro";
import {Empty,TabsPane,Tabs} from '@/components/index'
// import Items from './components/items/index'
import Items from './components/items/index'
import './index.less'


interface orderItem{
  id:string
  orderStatus:string
  companyLogoUrl:string
}
interface tabList {
  title:string,
  data:orderItem[]
}

const testData=[
  {
    id:'123',
    orderStatus:'success',
    companyLogoUrl:''
  },{
    id:'1234',
    orderStatus:'created',
    companyLogoUrl:''
  },{
    id:'1235',
    orderStatus:'received',
    companyLogoUrl:''
  },{
    id:'1236',
    orderStatus:'group',
    companyLogoUrl:''
  },{
    id:'12396',
    orderStatus:'canceled',
    companyLogoUrl:''
  }
]

const tabData=[
    { title: '全部', data: testData },
    { title: '待支付', data:[] },
    { title: '待收货', data:[] },
    { title: '已取消', data:[] },
    { title: '已完成', data:[] },
    { title: '退款中', data:[] }
  ]

function istype (type) {
  switch (type) {
    case 'success':
      return 4
    case 'created':
      return 1
    case 'drawback':
      return 5
    case 'received':
      return 2
    default:
      return 0
  }

}

const Order = () => {
  const [current, setcurrent] = useState(0)

  const {
    params: {type}
  } = useRouter()



  const [tabList, settabList] = useState<tabList[]>(tabData)

  useEffect(() => {
    Taro.setNavigationBarTitle({title:'我的订单'})
    if(istype(type)) {
      setcurrent(istype(type))
    }
  }, [])


  usePullDownRefresh(() => {
    console.log('---')
  })

  useReachBottom(() => {
    const a ={
      id:'12323',
      orderStatus:'success',
      companyLogoUrl:''
    }

    tabData[current].data.push(a)
    settabList([...tabData])
    console.log('onReachBottom')
  })


  return (
    <View className='order-warp'>
      <Tabs tabList={tabList} scroll={true} current={current} onClick={(obj)=>setcurrent(obj)}  >
        {tabList.map((list,index)=>{
          return (
            <TabsPane current={current}  index={index} key={list.title}>
              {list.data.length !==0 ? (
                list.data.map((item,index)=>{
                  return (
                    <Items orderItem={item} key={item.id} />
                  )
                })
              ):(
                <Empty />
              )}

            </TabsPane>
          )
        })}
      </Tabs>
      <View className='code'>提货二维码</View>
    </View>
  )
}
Order.options = {
  addGlobalClass: true,

}
export default Order
