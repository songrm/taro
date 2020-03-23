// const appQuery = Taro.getStorageSync('mainQuery')

// const data = {
//   title:'自定义转发',
//   path: `/pages/main/home/index?id=${appQuery.id}&h=t${appQuery.h}`,
//   imageUrl:'https://img.tebiemiao.cn/1574327164824.jpg'
// }

/**
 *
 * 可设置分享路径(优先级最高)
 * $setShareImageUrl = () =>{
 *  return 'https://img.tebiemiao.cn/1574327164824.jpg'
 *  }
 * 可设置分享图片路径(优先级最高)
 * $setShareTitle = () =>{
 *  return '文字'
 *  }
 *  页面调用
 *  @withShare({
 *    isShare: true,
 *    title: '可设置分享标题',
 *    imageUrl: '可设置分享图片路径',
 *    path: '可设置分享路径'
 *  })
 *
 *
 */

import Taro from '@tarojs/taro';
import { ComponentClass } from '@tarojs/taro'
/**
 * isShare 是否可分享
 * title 标题
 * imageUrl 图片路径
 * path 分享路径
 */
// interface list {
//   isShare: boolean,
//   title: string,
//   imageUrl: string,
//   path: string
// }

function withShare(opts:any) {

  // 设置默认
  const defalutPath = '/pages/main/home/index';
  const defalutTitle = '默认标题';
  const defaultImageUrl = 'defaultShareImg';
  console.log('===')

    return function demoComponent(Component)  {
      // redux里面的用户数据
      // @connect(({ user }) => ({
      //   userInfo: user.userInfo
      // }))
      console.log(Component, 'ComponentComponentComponent')
      class WithShare extends Component {
        async componentWillMount() {
          // 分享群
          // Taro.showShareMenu({
          //   withShareTicket: true
          // });

          if (super.componentWillMount) {
            super.componentWillMount()
          }
        }


        // 点击分享的那一刻会进行调用
        // onShareAppMessage() {
        //   // const { userInfo } = this.props;

        //   let { title, imageUrl, path = null } = opts;

        //   // 从继承的组件获取配置

        //   if (this.$setSharePath && typeof this.$setSharePath === 'function') {
        //     path = this.$setSharePath()
        //   }

        //   // 从继承的组件获取配置
        //   if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
        //     title = this.$setShareTitle()
        //   }

        //   // 从继承的组件获取配置
        //   if (
        //     this.$setShareImageUrl &&
        //     typeof this.$setShareImageUrl === 'function'
        //   ) {
        //     imageUrl = this.$setShareImageUrl()
        //   }

        //   if (!path) {
        //     path = defalutPath
        //   }

        //   const appQuery = Taro.getStorageSync('mainQuery')
        //   const sharePath = `${path}?id=${appQuery.id}&h=t${appQuery.h}`
        //   return {
        //     title: title || defalutTitle,
        //     path: sharePath,
        //     imageUrl: imageUrl || defaultImageUrl
        //   };
        // }

        render() {
          return super.render();
        }
      }

      return WithShare
    }


}

export default withShare

