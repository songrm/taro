import Taro from '@tarojs/taro'

// 获取navigationBar 高度
export async function getNavigationBarHeight () {
  const systemInfo: any = await Taro.getSystemInfo()
  const statusBarHeight = systemInfo.statusBarHeight
  let contentHeight
  if (Taro.getEnv() === 'ALIPAY') {
    contentHeight = systemInfo.titleBarHeight
  } else {
    let menuStyle = Taro.getStorageSync('menuStyle')
    if (!(menuStyle && menuStyle.height > 0)) {
      menuStyle = Taro.getMenuButtonBoundingClientRect()
    }
    contentHeight = menuStyle.height + (menuStyle.top - systemInfo.statusBarHeight) * 2
    contentHeight = contentHeight || 44
  }
  return {
    statusBarHeight,
    contentHeight,
    navigationBarHeight: statusBarHeight + contentHeight
  }
}
