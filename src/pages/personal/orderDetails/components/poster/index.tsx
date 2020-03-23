import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import { AtActivityIndicator, AtIcon } from 'taro-ui'
import Dialog from '@/components/Dialog'
import classnames from 'classnames'
import DrawCanvas from '../drawCanvas'
import Tip from '@/utils/tip'
// import saveImg from '../../images/save-icon.png'
import './index.less'

type props = {
  info: any,
  qrcode: string,
  logo: string,
  onClose: () => void
}
type state = {
  canvasUrl: string,
  loaded: boolean
}

export default class PresaleTicketPoster extends Component<props, state> {
  static options = {
    addGlobalClass: true
  }
  constructor (props) {
    super(props)
    this.state = {
      canvasUrl: '',
      loaded: true
    }
  }
  onDrawSuccess (canvasUrl) {
    this.setState({
      canvasUrl
    }, this.onLoaded)
  }
  onDrawFail () {
    this.onLoaded()
  }
  // 图片加载完成
  onLoaded () {
    Tip.hideLoading()
    this.setState({
      loaded: false
    })
  }
  onClose () {
    this.props.onClose()
  }
  async onClickSave () {
    Tip.showLoading('保存中...')
    const res = await Taro.getSetting()
    if (!res.authSetting['scope.writePhotosAlbum']) {
      try {
        await Taro.authorize({
          scope: 'scope.writePhotosAlbum'
        })
        this.onSave()
      } catch (e) {
        Tip.hideLoading()
        if (e.errMsg.indexOf('authorize:fail') >= 0) {
          Tip.showToast('请删除小程序或者到小程序右上角“设置”里面开启相册权限', {
            duration: 2000
          })
        }
      }
    } else {
      this.onSave()
    }
  }
  async onSave () {
    try {
      await Taro.saveImageToPhotosAlbum({
        filePath: this.state.canvasUrl
      })
      Tip.showToast('保存成功', {
        icon: 'success',
        duration: 1500
      })
      this.onClose()
    } catch (e) {
      Tip.showToast('保存失败')
    }
  }
  render () {
    const { canvasUrl, loaded } = this.state
    const { info, qrcode, logo } = this.props
    return (
      <Dialog
        show={true}
        onClose={this.onClose.bind(this)}
        style={{ zIndex: 999 }}
      >

        <View className={classnames('ticket-poster', {
          x: Taro.getStorageSync('isFullScreen')
        })}>
          <DrawCanvas
            info={info}
            qrcode={qrcode}
            logo={logo}
            onSuccess={this.onDrawSuccess.bind(this)}
            onFail={this.onDrawFail.bind(this)}
          />
          {canvasUrl && <ScrollView scrollY className='poster-box'>
            <View className='poster-wrap'>
              <Image
                className='poster-cover'
                src={canvasUrl}
                mode='widthFix'
              />
              <View className='poster-close' onClick={this.onClose.bind(this)}>
                <AtIcon
                  value='close-circle'
                  size='40'
                  color='#fff'
                />
              </View>
            </View>
          </ScrollView>}
          {canvasUrl && <View className='poster-save df-c' onClick={this.onClickSave.bind(this)}>
            <View className='poster-save__box df-c'>
              {/* <Image
                className='poster-save__icon'
                src={saveImg}
                mode='widthFix'
              /> */}
              <Text className='poster-save__text'>保存图片</Text>
            </View>
          </View>}
          {loaded && <AtActivityIndicator mode='center'/>}
        </View>
      </Dialog>
    )
  }
}
