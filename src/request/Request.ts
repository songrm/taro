import Taro from '@tarojs/taro'



type Config = {
  baseURL: string,
  noConsole?: boolean
}


// 检查状态码
function checkCode (code, msg) {
  if (code === 500) {
    throw msg || '服务器繁忙，请稍后再试'
  } else {
    throw msg
  }
}

export default class Request {
  config: Config
  token = ''
  shelfId = ''
  userId = ''

  constructor (config: Config) {
    this.config = config
  }

  async req (url: string, data: any, method: 'GET' | 'POST' | 'PUT' | 'DELETE', header?: any): Promise<any> {
    let token = this.token
    let shelfId = this.shelfId

    if (!token) {
      this.token = token = Taro.getStorageSync('token') || ''
    }
    if (!shelfId) {
      this.shelfId = shelfId = Taro.getStorageSync('qrCodeId') || ''
    }

    try {
      const res = await Taro.request({
        url: this.config.baseURL + url,
        data,
        header: {
          'Content-Type': 'application/json',
          // 'X-Token': token,
          // 'X-Shelf-ID': shelfId,
          ...header
        },
        method
      })

      // statusCode: 请求响应状态
      // code: 服务器响应状态
      const statusCode = Number(res.statusCode)
      if (statusCode === 200) {
        if (!this.config.noConsole) {
          console.log(`${new Date().toLocaleString()}【 M=${url} 】【接口响应：】`, res.data)
        }
        const data = res.data
        if (!data) {
          return ''
        }
        const code = Number(data.code)
        if (code === 200 || code === 0) {
          return data
        } else {
          checkCode(code, data.message || code)
        }
      } else {
        const data = res.data
        if (!data) {
          return ''
        }
        checkCode(statusCode, data.message || statusCode)
      }
    } catch (e) {
      console.log('错误')
      console.log(e)
      const msg = typeof e === 'object' ? (e.data.message || e.errorMessage) : e

      Taro.atMessage({
        'message': msg,
        'type': 'error',
      })

      throw e
    }
  }

  get (url, data?, header?) {
    return this.req(url, data, 'GET', header)
  }

  post (url, data?, header?) {
    return this.req(url, data, 'POST', header)
  }

  del (url, data?, header?) {
    return this.req(url, data, 'DELETE', header)
  }

  put (url, data?, header?) {
    return this.req(url, data, 'PUT', header)
  }
}
