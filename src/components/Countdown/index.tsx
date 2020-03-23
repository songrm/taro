import Taro,{ useEffect, useState,memo } from "@tarojs/taro";
import { View } from "@tarojs/components"
import './index.less'
/*
endTime: 目标时间，格式为时间戳
endTimeUp: 倒计时结束的回调
 */

interface countdownProp {
  isShowDay?:boolean
  isShowHour?:boolean
  endTime:string
  styleProps?:{}
}
const iconStyleProps ={
  color:'#ec7259'
}

const Countdown = ({endTime,isShowHour=false,isShowDay=false,styleProps=iconStyleProps}:countdownProp) => {

  const [count, setcount] = useState(0)

  const endTimeformat =  new Date(endTime).getTime()

  const [day, setDay] = useState(0)
  const [hour, setHour] = useState('0')
  const [minute, setMinute] = useState('0')
  const [second, setSecond] = useState('0')

  useEffect(() => {
    let sys_second = (endTimeformat - new Date().getTime());

    const timerId = setInterval(() => {
        //防止倒计时出现负数
        if (sys_second > 1000) {
            sys_second -= 1000;
            let day = Math.floor((sys_second / 1000 / 3600) / 24);
            let hour = Math.floor((sys_second / 1000 / 3600) % 24).toString();
            let minute = Math.floor((sys_second / 1000 / 60) % 60).toString();
            let second = Math.floor(sys_second / 1000 % 60).toString();
            setDay(day);
            setHour(Number(hour) < 10 ? "0" + hour : hour);
            setMinute(Number(minute) < 10 ? "0" + minute : minute);
            setSecond(Number(second) < 10 ? "0" + second : second);
        } else {
            clearInterval(timerId);
            //倒计时结束时触发方法
            // !!endTimeUp && endTimeUp();
        }
    }, 1000);
    return () => {  //返回一个回调函数用来清除定时器
        clearInterval(timerId)
    };
}, [endTimeformat]);



  return (
    <View className='countdown' style={styleProps}>

      {isShowDay && (
        <View className='day'>
          <View className='red'>{day}</View>
          <View className='time'>天</View>
        </View>

      )}
      {isShowHour && (
        <View className='hour'>
          <View className='red'>{hour}</View>
          <View className='time'>小时</View>
        </View>
      )}
      <View className='red'>{minute}</View>
      <View className='time'>分</View>
      <View className='red'>{second}</View>
      <View className='time'>秒</View>
    </View>
  )
}
export default memo(Countdown)
