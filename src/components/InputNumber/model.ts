import Taro from '@tarojs/taro';
import {getSum,numberTotle} from '../../utils/ZipCodeValidator'
// import toast from '@/utils/toast'
import toast from '../../utils/toast'
// 购物车
export default {
  namespace: 'cart',
  state: {
    items: Taro.getStorageSync('items') || [],  // 商品 + 个数
    goodsItems: {}, // 记录单独商品
    totle: 0,
    totlePrice:0
  },

  reducers: {
    addCart(state, {payload}){
      let {items, goodsItems} = state

      const list = state.items.find(item => {
        return item.id == payload.id;
      })

      if (list !== undefined) {
        // 存在 amount +1

        if(list.number < Number(payload.stock)) {

          items.map(list => {
            if(list.id === payload.id){
              list.number = list.number + 1
            }
          })

        } else {
          toast.showToast('库存不足')
        }
      } else {
        // 不存在 数组中添加
        const listItem = {
          ...payload,
          'number': 1
        }
       
        // goodsItems.push(payload)
        goodsItems = listItem
        items.push(listItem)
      }

      return {
        ...state,items,goodsItems
      }
    },

    reduceCart(state, {payload}){
      // 减少
      let {items} = state
      const list = state.items.find(item => {
        return item.id == payload.id;
      })
      // console.log(items)
      if(list.number === 0) {
        toast.showToast('不存在该商品')

      } else {
        items.map(list => {
          if(list.id === payload.id){
            list.number = list.number - 1
          }
        })
        // toast.showToast('不存在该商品')
      }

      // 计算总数
      const totle = numberTotle(items,'number').reduce(getSum)
      const ww = items.map(m=>{
        return m.price*m.number
      })
      const totlePrice = ww.reduce(getSum)

      return {
        ...state,items,totle,totlePrice
      }

    }
  },

};
