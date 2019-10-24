import Taro from '@tarojs/taro'


export default {
  showToast (text) {
    Taro.showToast({
      title: text,
      icon: 'none',
      duration: 2000
    })
  },

}

