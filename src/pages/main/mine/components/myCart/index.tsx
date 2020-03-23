import Taro, { memo } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'
import './index.less'

const Cart =(param) =>{
  const {cartlist} = param

  if (!cartlist) {
    return null
  }


  const urlGo =(obj) => {
    console.log(obj)
    if(obj.title==='联系客服'){
      Taro.makePhoneCall({
        phoneNumber: obj.url
      })
    }else {
      Taro.navigateTo({ url: obj.url })
    }

  }

  return (
    <View className='PersonalCard' onClick={()=>urlGo(cartlist)} key={cartlist.title}>
      {/* <Image
        src={cartlist.icon}
        mode='widthFix'
        className='icon'
      /> */}
      <View className='iconfont icon'>&#xe63c;</View>
      <View className='info'>
        <Text>{cartlist.title}</Text>
        <View>
          <Text>{cartlist.dec}</Text>
          <Text className='info-arrow iconfont'> &#xe61b; </Text>
        </View>

      </View>

    </View>
  )
}

Cart.options = {
  addGlobalClass: true
}
export default memo(Cart)
