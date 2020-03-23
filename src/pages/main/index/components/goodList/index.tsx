import Taro from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import { useSelector, useDispatch } from '@tarojs/redux'

import './index.less'

const GoodList = (props) => {
  const {name,price,des,url} = props.list

  const dispatch = useDispatch()
  const cart = () =>{

    dispatch({ type: 'cart/addCart', payload: {...props.list} })
  }

  return (
    <View className='goodsList'>
      <View className='left'>
        <Image src={url} className='image' />
      </View>
      <View className='right'>
        <View className='title'>{name}</View>
        <View className='des'>{des}</View>
        <View className='shopping'>
          <View className='money'>¥{price}</View>

          <View className='money iconfont' onClick={cart}>&#xe605;</View>
        </View>

      </View>
    </View>
  )
}
GoodList.options={
  addGlobalClass: true
}
export default GoodList
