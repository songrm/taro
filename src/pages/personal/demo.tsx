import Taro, { useState, useEffect } from '@tarojs/taro'
import { View,Button } from '@tarojs/components'
// import './index.less'

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  const [ fruit,setFruit ] = useState('banana')

  useEffect(() => {
    const title = '我的'
    Taro.setNavigationBarTitle({ title })

    console.log('====1')
  }, [])

  useEffect(() => {
    // console.log('componentDidUpdate： 更新usernmae===')
  }, [count]);


  function abc(){
    setFruit('改变2')
  }

  return (
    <View>
      <View>You clicked {count} times</View>
      <View>{fruit}</View>
      <Button onClick={abc}>

      https://segmentfault.com/a/1190000018697490?utm_source=tag-newest
        Click me0
      </Button>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </View>
  );
}

const areEqual = ({ repo: prevRepo }: any, { repo }: any) => {
  return (
    prevRepo && prevRepo.name === repo.name && prevRepo.author === repo.author
  )
}
// useMemo(() => function, input)

export default Example


