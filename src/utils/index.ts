import Taro from '@tarojs/taro'
import { boundingClientRect } from '@/typings/wx'

/**
 * 获取当前元素信息
 * @param selector 选择器
 * @param bol 是否选取所有节点
 */
export function getRect (selector: string, scope?: any) {
  const query = Taro.createSelectorQuery()
  if (scope) {
    query.in(scope)
  }
  return new Promise<boundingClientRect | boundingClientRect[]>(resolve => {
    query.select(selector).boundingClientRect()
    query.exec((res: boundingClientRect | boundingClientRect[]) => {
      resolve(res)
    })
  })
}
/**
 * 获取当前所有节点信息
 * @export
 * @param {string} selector
 * @param {boolean} [bol=false]
 * @returns
 */
export function getAllRect (selector: string, scope?: any) {
  return new Promise<boundingClientRect | boundingClientRect[]>(resolve => {
    const query = Taro.createSelectorQuery()
    if (scope) {
      query.in(scope)
    }
    query.selectAll(selector).boundingClientRect()
    query.exec((res: boundingClientRect | boundingClientRect[]) => {
      resolve(res)
    })
  })
}

// 获取scrollTop
export function getScrollTop () {
  return new Promise<number>(r => {
    Taro.createSelectorQuery()
      .selectViewport()
      .scrollOffset()
      .exec((res: any) => {
        r(res[0].scrollTop * 1)
      })
  })
}

/**
 * 随机串
 * @param len
 */
export function randomString (len = 32) {
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz12345678'
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}