import Request from './Request'

const isEnv = process.env.NODE_ENV === 'development'
const config = {
  base: isEnv ? 'test' : '',
}
export default {
  base: new Request({
    baseURL: `${config.base}`
  }),

}
