
const numberRegexp = /^[0-9]+$/;

  export class ZipCodeValidator {
    // 正则验证
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
  }

  export class simpleUntil{
    // 不带条件数组去重
  Duplicate(arr) {
    return Array.from(new Set(arr))
  }
  // 最小值
  minNum (num){
    return Math.min(num)
  }
  // 最大值
  maxNum (num){
    return Math.max(num)
  }
  // 是否包含某个字符
  includes(str,key){
    // 返回true/false
    return str.includes(key)
  }

  // 求和
  reduceNum(arr){
    var total = arr.reduce(( acc, cur ) => {
      return acc + cur
  }, 0);
    return total
  }

  }

  // namespace


    // 字符串拼接
  export function toObj(val) {
      const temp = Object.keys(val)
        .map(item => {
          return `${item}=${val[item]}`
        })
        .join(`&`)

      return temp
    }

  // 数组去重
  export function uniqObjectInArray(arr, key) {
    const res = new Map()
    return arr.filter(a => !res.has(a[key]) && res.set(a[key], 1))
  }

  export function getSum(total, num) {
    return total + num;
  }

  export function numberTotle(obj,txt){
    const amounts = obj.map(list => {
      return list[`${txt}`]
    })
    return amounts
  }



  // 时间格式化
  export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    //  debugger
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if (('' + time).length === 10) time = parseInt(time) * 1000
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return time_str
  }





