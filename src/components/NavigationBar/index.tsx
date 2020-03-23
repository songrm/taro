import Taro, { useState, useEffect, useRef } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import classnames from 'classnames'
import { getNavigationBarHeight } from '@/utils/app'
import { getColorGradient, formatColorRGB } from '@/utils/color'
import './index.less'


const defaultProps = {
  title: '',
  align: 'center',
  backgroundColor: '#ffffff',
  // 渐变高度，传入及代表需要渐变
  gradientHeight: 0,
  // 初始字体颜色
  color: '#000000',
  // 渐变字体颜色
  gradientColor: '#ffffff',
  hasBack: false
}

type Props = {
  title?: string
  align?: string
  backgroundColor?: any
  gradientHeight?: number
  color?: any
  gradientColor?: any
  hasBack?: boolean
  onChange?: Function
  children?: any,
  scroll?: {
    current: any
  },
  ref?:any
}

type Ref = {
  colorGradientList: string[]
  backgroundColorRgbs: number[]
  isGradientFinish: boolean
  systemFrontColor: any
  systemBackgroundColor: any
}

function NavigationBar({
  backgroundColor,
  color,
  gradientColor,
  gradientHeight,
  hasBack,
  title,
  align,
  children,
  scroll,
  onChange
}: Props) {
  const [statusBarHeight, setStatusBarHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const [fontColor, setFontColor] = useState<string>(color)
  const [bgColor, setBgColor] = useState('')
  const state = useRef<Ref>({
    colorGradientList: [],
    backgroundColorRgbs: [],
    isGradientFinish: false,
    systemFrontColor: color,
    systemBackgroundColor: backgroundColor
  })

  // 获取小程序导航栏高度
  useEffect(() => {
    getNavigationBarHeight().then((res) => {
      setStatusBarHeight(res.statusBarHeight)
      setContentHeight(res.contentHeight)
    })
  }, [])

  // 滚动
  useEffect(() => {
    if (scroll) {
      scroll.current = (scrollTop) => {
      let gh = gradientHeight
      if (gh) {
        gh -= (statusBarHeight + contentHeight)
        if (!gh) {
          return
        }
        // 有位移高度用来渐变
        let backgroundColorNew = ''
        let fontColorNew = ''
        state.current.isGradientFinish = scrollTop >= gh
        if (scrollTop <= gh) {
          backgroundColorNew = `rgba(${state.current.backgroundColorRgbs.join(',')}, ${scrollTop / gh})`
          fontColorNew = state.current.colorGradientList[scrollTop - 1 < 0 ? 0 : scrollTop - 1]
        } else {
          backgroundColorNew = `rgba(${state.current.backgroundColorRgbs.join(',')}, 1)`
          fontColorNew = state.current.colorGradientList[state.current.colorGradientList.length - 1]
        }
        // 背景颜色跟字体颜色渐变
        if (bgColor !== backgroundColorNew || fontColor !== fontColorNew) {
          onChange && onChange({
            backgroundColor: backgroundColorNew,
            fontColor: fontColorNew,
            rate: scrollTop / gh,
            scrollTop
          })
          setBgColor(backgroundColorNew)
          setFontColor(fontColorNew)
        }

        // 系统颜色设置
        // const { gradientColor, color } = this.props
        if (scrollTop >= gh) {
          if (state.current.systemFrontColor !== gradientColor) {
            Taro.setNavigationBarColor({
              frontColor: gradientColor,
              backgroundColor: state.current.systemBackgroundColor
            })
          }
          state.current.systemFrontColor = gradientColor
        } else {
          if (state.current.systemFrontColor !== color) {
            Taro.setNavigationBarColor({
              frontColor: color,
              backgroundColor: state.current.systemBackgroundColor
            })
          }
          state.current.systemFrontColor = color
        }
      }
      }
    }
  }, [bgColor, color, contentHeight, fontColor, gradientColor, gradientHeight, onChange, scroll, statusBarHeight])

  // 设置颜色
  useEffect(() => {
    state.current.colorGradientList = getColorGradient(color, gradientColor, gradientHeight)
    state.current.backgroundColorRgbs = formatColorRGB(backgroundColor)
    setBgColor(`rgba(${state.current.backgroundColorRgbs.join(',')}, ${gradientHeight ? 0 : 1})`)
    Taro.setNavigationBarColor({
      frontColor: color,
      backgroundColor
    })
  }, [backgroundColor, color, gradientColor, gradientHeight])

  const onBack = () => {
    Taro.navigateBack()
  }
  return (
    <View className="NavigationBar">
      <View style={{
        backgroundColor: bgColor
      }}
      >
        <View
          className='NavigationBar-statusbar'
          style={{
            height: `${statusBarHeight}px`
          }}
        >
        </View>
        <View
          className='NavigationBar__content'
          style={{
            height: `${contentHeight}px`
          }}
        >
          {hasBack && <View className='NavigationBar__back' onClick={onBack}>
            <AtIcon value='chevron-left' size='28' color={fontColor}></AtIcon>
          </View>}
          {title && <View className={classnames(['NavigationBar__title wes', `NavigationBar__title-${align}`])} style={{ color: fontColor }}>{title}</View>}
          {children}
        </View>
      </View>
    </View>
  )
}

NavigationBar.defaultProps = defaultProps

export default NavigationBar
