import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Input,Label,Text } from "@tarojs/components"
import Tip from '@/utils/tip'
import './index.less'


const Authentication = () => {
  useEffect(() => {
   Taro.setNavigationBarTitle({title:'工号认证'})
  }, [])

  const [jobNum, setjobNum] = useState('')
  const [isClockShow, setisClockShow] = useState(false)
  const [clock, setclock] = useState(60)
  const [phone, setphone] = useState('')

  const phoneModify = () => {
    console.log('000')
    if (jobNum === '') {
      Tip.showToast('请输入工号')
      return false
    }

  }

  const onInputPhone = (e) => {
    setphone(e.target.value)
  }
  const isPhone= (phone)=> {
    const reg = /^(\+86)|(86)?1[3,5,8,7]{1}[0-9]{1}[0-9]{8}$/
    return reg.test(phone)
  }
  const getCode = (e) =>{
    // if(!isPhone(phone)){
    //   return false
    // }
    setisClockShow(true)
    startClock()
  }

  const startClock =()=> {
    setclock(60)

    const id = setInterval(() => {
      let nclock = clock

      setclock(--nclock)

      if (clock === 0) {
        setisClockShow(false)

        clearInterval(id)
      }
    }, 1000)
  }

  return (
    <View className='authentication'>
      <View className='LoginPage'>

        <View className='panel'>
          <View className='inputLabel'>
            <Label for='phoneInput'>账号昵称</Label>
            <Input
              id='phoneInput'
              onInput={(e)=>setjobNum(e.detail.value)}
              value={jobNum}
              placeholder='请输入账号昵称' />

          </View>

          <View className='inputLabel'>
            <Label for='phoneInput'>手机号</Label>
            <Input
              id='phoneInput'
              onInput={onInputPhone}
              type='number'
              placeholder='请输入手机号' />
            <View className='getCode'>
              {isClockShow && <Text>{clock} 秒</Text>}
              {!isClockShow && <Text
                onClick={getCode} className='btn'>
                获取验证码
              </Text>}
            </View>
          </View>

          <View
            className={jobNum === '' ? 'loginBtn disable' : 'loginBtn'}
            onClick={()=>phoneModify()}
            >
              登录
          </View>

        </View>
      </View>
    </View>
  )
}
Authentication.options={
  addGlobalClass: true
}
export default Authentication
