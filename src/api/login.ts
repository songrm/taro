import request from '../request/index'
const { base } = request

export default {
  // 登陆
  login: data => base.post(`/login`, data),

}
