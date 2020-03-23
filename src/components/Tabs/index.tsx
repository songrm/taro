import Taro,{ useState,memo } from "@tarojs/taro"
import { View, ScrollView } from "@tarojs/components"
import classnames from 'classnames'
import './index.less'

interface List {
  children: any
  tabList: { title: string }[]
  current: number
  scroll?: boolean,
  onClick?: any
}

const Tabs = (props: List) => {
  const {tabList,current,children,scroll=false,onClick} = props
  const [scrollIntoView, setscrollIntoView] = useState('')

  if(tabList === undefined){
    return null
  }


  const transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`


  const tabChange =(e) => {
    // console.log(e)
    setscrollIntoView(`tab${current - 1}`)
    onClick(e)
  }
  const tabItems = tabList.map((item, i) => (
    <View
      className={
        classnames({
          'ctabs-item': true,
          'ctabs-item__active': current === i
        })
      }
      id={`tab${i}`}
      key={item.title}
      onClick={()=>tabChange(i)}
    >
      {item.title}
    </View>
  ))

  return (
    <View className='ctabs'>
      {scroll ? (
          <ScrollView
            className='ctabs-header ctabs-header__scroll'
            scrollX
            scrollWithAnimation

            scrollIntoView={scrollIntoView}
          >
            {tabItems}
          </ScrollView>
        ) : (
          <View className='ctabs-header'>
            {tabItems}
          </View>
        )}


      <View
        className='ctabs-body'
        style={{
          transform: transformStyle
        }}
      >
        {children}
      </View>

    </View>
  )
}

const areEqual = ({ tabList: prevProps }: List, { tabList }: List) => {
  return prevProps === tabList
}
export default memo(Tabs,areEqual)
