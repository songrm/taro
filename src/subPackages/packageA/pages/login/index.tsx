import Taro, { Component, Config } from '@tarojs/taro'

import { View, Label, Input } from '@tarojs/components'
import * as Validation from '../../../../utils/ZipCodeValidator'
// import api from '../../api'

import './index.scss'


type props = {
  dispatch?:any
}
type state = {
  name: string,
  pwd: string
}

export default class Index extends Component<props, state> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '登陆'
  }

  constructor () {
    super()
    this.state = {
      name: '',
      pwd: ''
    }
  }

  async login() {
    let list = [4, 5, 6]

    const mmm= 'w'
    console.log(mmm)

    for (let i in list) {
      console.log(i) // "0", "1", "2",
    }

    for (let i of list) {
      console.log(i) // "4", "5", "6"
    }
    let myValidator = new Validation.ZipCodeValidator()
    const m = myValidator.isAcceptable('12345')

    console.log(this.state, m)
    // await api.login.login(this.state)

  }

  // 定义泛类
  allDemo<T> (m:T):T{
    // 返回所有类型
    console.log(m)
    return m
  }
  arrayDemo<T>(m:Array<T>):T[]{
    //array 类型 可使用属性 length
    console.log(m.length)
    return m
  }

  login1(){
    // 这里是登陆
     const {name,pwd}=this.state
     if(name === '') {
       return false
     }

    //  console.log(this.props)
     Taro.setStorageSync('name', name)
     Taro.setStorageSync('pwd', pwd)

     Taro.navigateBack()
    //  console.log(Taro.getStorageSync('name'))

  }

  onInputName(e) {
    this.setState({
      name: e.target.value
    })
  }


  onInputPwd(e) {
    this.setState({
      pwd: e.target.value
    })
  }

  componentWillMount () { }

  componentDidMount () {
    console.log(this)
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {name,pwd} = this.state
    return (
      <View className='InvitationPage'>

      <View className='panel'>
        <View className='inputLabel'>
          <Label for='phoneInput'>用户名</Label>
          <Input
            id='name'
            value={name}
            type='text'
            onInput={this.onInputName.bind(this)}
            placeholder='请输入用户名admin'
          />
        </View>
        <View className='inputLabel'>
          <Label for='phoneInput'>密 码</Label>
          <Input
            id='password'
            value={pwd}
            password
            onInput={this.onInputPwd.bind(this)}
            placeholder='请输入密码admin'
          />
        </View>



      </View>
      <View
          className='loginBtn'
          onClick={this.login1.bind(this)}
        >
          登陆
        </View>
    </View>
    )
  }
}

