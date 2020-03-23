import Taro from '@tarojs/taro'
const isAlipay = Taro.getEnv() === 'ALIPAY'
// const Taro = isAlipay ? my : Taro
const Tip = Taro

export default {
  showLoading (title = '加载中') {
    if (Tip.showLoading) {
      Tip.showLoading({
        content: title,
        title,
        mask: true
      })
    } else {
      Tip.showNavigationBarLoading()
    }
  },
  hideLoading () {
    if (Tip.hideLoading) {
      Tip.hideLoading()
    } else {
      Tip.hideNavigationBarLoading()
    }
  },
  showToast (text, params?) {
    Tip.showToast({
      title: text,
      content: text,
      icon: 'none',
      mask: true,
      ...params
    })
  },
  hideToast () {
    Tip.hideToast()
  },
  showModel ({ title= '提示', content, ...params }) {
    return new Promise((rs, rj) => {
      if (params.showCancel === false && isAlipay) {
        Tip.alert({
          title,
          content,
          ...params,
          success () {
            rs()
          }
        })
      } else {
        Tip[isAlipay ? 'confirm' : 'showModal']({
          title,
          content,
          ...params,
          success (res) {
            if (res.confirm) {
              rs()
            } else {
              rj()
            }
          }
        })
      }
    })
  }
}
