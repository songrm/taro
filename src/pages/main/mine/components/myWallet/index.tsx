import Taro, { memo } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {Y} from '@/components/index'
import './index.less'

// interface walletList {
//   walletList:{money:string,name:string}[]
// }

const Mywallet = (param) =>{

  // const [p, setP] = useState(param)
  const {walletList} = param


  return (

    <View className='wallet-list' key={walletList.name}>
      <View className='wallet-list-y'>
        <View className='Y'><Y /></View>
        {walletList.money}
      </View>
      <View className='wallet-list-txt'>
        {walletList.name}
      </View>
    </View>

  )
}
// const areEqual = ({ walletList: prevRepo }: any, { walletList }: any) => {
//   return (
//     prevRepo && prevRepo.name === walletList.name && prevRepo.money === walletList.money
//   )
// }
// Wallet.options = {
//   addGlobalClass: true
// }
export default memo(Mywallet)
