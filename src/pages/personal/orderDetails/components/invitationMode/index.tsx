import Taro from '@tarojs/taro'
import { View,Button,Image,Text } from "@tarojs/components"

import { AtIcon } from "taro-ui"
// import "taro-ui/dist/style/components/modal.scss";

import Dialog from '@/components/Dialog'
import FriendsImage from './image/friends.png'
import WechatImage from './image/wechat.png'
import './index.less'


const InvitationMode = ({isOpened,handclick,close}) => {
  const friend = () => {
    handclick()
  }
  const closeFriend = () => {
    close()
  }
  return (
    <View>
      {isOpened && (
        <View>
          <Dialog show={true}>
            <View className='share-all'>
              <View className='share-title'>分享至</View>
              <View className='share'>
                <View className='share-list'>
                  <Image src = {FriendsImage} className='image' mode='widthFix'/>
                  <Button open-type="share" className='wechatBtn'>微信好友</Button>
                  <Text>微信好友</Text>
                </View>
                <View className='share-list' onClick={() => friend()}>
                  <Image src={WechatImage} mode='widthFix' className='image' />
                  <Text>朋友圈</Text>
                </View>
              </View>

              {/* <Button onClick={() => closeFriend()}>取消</Button> */}
            </View>
            <View className='iconfont close' onClick={() => closeFriend()}>
              &#xe6c8;
            </View>

          </Dialog>
        </View>
      )}
    </View>
    // <AtModal isOpened={isOpened}>
    //   <AtModalHeader>分享至</AtModalHeader>
    //   <AtModalContent>
    //     <View className='share'>
    //       <View className='share-list'>
    //         <Image src = {FriendsImage} className='image' mode='widthFix'/>
    //         <Button open-type="share">微信好友</Button>
    //       </View>
    //       <View className='share-a-list' onClick={() => friend()}>
    //         <Image src={WechatImage} mode='widthFix' className='image' />
    //         朋友圈
    //       </View>
    //     </View>
    //   </AtModalContent>
    //   <Button onClick={() => closeFriend()}>取消</Button>
    // </AtModal>
  )
}
InvitationMode.options = {
  addGlobalClass: true
}
export default InvitationMode
