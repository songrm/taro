import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getNavigationBarHeight } from '@/utils/app'

function PageContainer(props) {
  const [navigationBarHeight, setNavigationBarHeight] = useState(88)
  // 设置顶部边距
  useEffect(() => {
    getNavigationBarHeight().then((res) => {
      setNavigationBarHeight(res.navigationBarHeight)
    })
  }, [])
  return (
    <View
      className="PageContainer"
      style={{
        paddingTop: `${navigationBarHeight}px`,
        height: `calc(100vh - ${navigationBarHeight}px)`
      }}
    >
      {props.children}
    </View>
  )
}

export default PageContainer
