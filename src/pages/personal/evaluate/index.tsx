import Taro, { useEffect, useState } from '@tarojs/taro'
import { View,Image } from "@tarojs/components"
import Items from './components/items'
import {Empty,TabsPane,Tabs} from '@/components/index'
import './index.less'
// import { AtRate } from 'taro-ui'


const Evaluate = () =>{
  const tabData=[
    { title: '待评价'},
    { title: '已评价'},
  ]
  // 已评价
  const evaluatedData=[
    {id:'1',name:'金龙鱼食用植物调和油物调和油',isEvaluated:true}
  ]

  // 待评价
  const NoevaluatedData=[
    {id:'1',name:'金龙鱼食用植物调和油',isEvaluated:false}
  ]

  useEffect(() => {
    Taro.setNavigationBarTitle({title:'评价'})
  }, [])
  const [current, setcurrent] = useState<number | 0>(0)

  return (
    <View className='evaluate'>
      {/* <AtRate
          value={4}
        /> */}
      <Tabs tabList={tabData} current={current} onClick={(obj)=>setcurrent(obj)}  >
        <TabsPane current={current}  index={current}>
          {evaluatedData.length !==0 ? (
            evaluatedData.map((item,index)=>{
              return (
                <Items data={item} key={item.id} />
              )
            })
          ):(
            <Empty />
          )}

        </TabsPane>
        <TabsPane current={current}  index={current}>
          {NoevaluatedData.length !==0 ? (
            NoevaluatedData.map((item,index)=>{
              return (
                <Items data={item} key={item.id} />
              )
            })
          ):(
            <Empty />
          )}

        </TabsPane>
      </Tabs>
    </View>
  )
}
Evaluate.options = {
  addGlobalClass: true,

}
export default Evaluate
