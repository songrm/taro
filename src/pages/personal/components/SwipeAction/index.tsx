import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import _inRange from 'lodash/inRange'
// import { getRect, randomString } from '@/utils'
import classnames from 'classnames'
import './index.less'

type props = {
  onDelete?: () => void
  isOpened?: boolean
  onChange?: (isOpened: boolean) => void
}
type state = {
  offsetSize: number
  _isOpened: boolean
}

export default class SwipeAction extends Component<props, state> {
  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    _isOpened: false
  }
  constructor (props) {
    super(props)
    this.state = {
      offsetSize: 0,
      _isOpened: props.isOpened
    }
  }
  isTouching: boolean = false
  isMoving: boolean = false
  startX: number = 0
  startY: number = 0
  endValue: number = 0
  maxOffsetSize: number = 69
  domInfo:any = {}
  optionsInfo: any = {}
  // actionClassName: string = randomString(8)
  // optionClassName: string = randomString(8)
  actionClassName:'ooo'
  optionClassName: '0009'

  async componentDidMount () {
    // const res = await getRect(`.${this.actionClassName}`, this.$scope)
    // this.domInfo = res[0] || {}
    this.domInfo = {}
    this.handleOptionsInfo()
  }
  componentWillReceiveProps (nextProps) {
    const { isOpened } = nextProps
    const { _isOpened } = this.state

    if (isOpened !== _isOpened) {
      this._reset(isOpened)
    }
  }
  async handleOptionsInfo () {
    // const res = await getRect(`.${this.optionClassName}`, this.$scope)
    // this.optionsInfo = res[0] || {}
    this.optionsInfo = {}
    // 最大距离
    this.maxOffsetSize = this.optionsInfo.width ? this.optionsInfo.width : 69
    this._reset(this.state._isOpened)
  }
  handleTouchStart (e) {
    const { clientX, clientY } = e.touches[0]
    this.startX = clientX
    this.startY = clientY
    this.isTouching = true
  }
  handleTouchMove (e) {
    // if (!this.domInfo) {
    //   return
    // }
    const { startX, startY } = this
    // const { top, bottom, left, right } = this.domInfo
    // const { clientX, clientY, pageX, pageY } = e.touches[0]
    const { clientX, clientY } = e.touches[0]

    const x = Math.abs(clientX - startX)
    const y = Math.abs(clientY - startY)

    // const inDom = _inRange(pageX, left, right) && _inRange(pageY, top, bottom)
    const inDom = true
    if (!this.isMoving && inDom) {
      this.isMoving =
        y === 0 || x / y >= Number(Math.tan((45 * Math.PI) / 180).toFixed(2))
    }
    if (this.isTouching && this.isMoving) {
      const offsetSize = clientX - this.startX
      const isRight = offsetSize > 0

      if (this.state.offsetSize === 0 && isRight) return

      const value = this.endValue + offsetSize

      console.log(isRight,value,'===')
      if (Math.abs(value) > this.maxOffsetSize) {
        this.setState({
          offsetSize: -this.maxOffsetSize
        })
      } else {
        this.setState({
          offsetSize: value >= 0 ? 0 : value
        })
      }
    }
  }
  handleTouchEnd () {
    // this.isTouching = false
    // const { offsetSize } = this.state
    // this.endValue = offsetSize

    // const breakpoint = this.maxOffsetSize / 2
    // const absOffsetSize = Math.abs(offsetSize)
    // if (absOffsetSize > breakpoint) {
    //   this._reset(true)
    //   return
    // }
    // this._reset(false)
  }
  _reset (isOpened?: boolean, isDel = false) {
    this.isMoving = false
    this.isTouching = false

    const isChange = isOpened !== this.state._isOpened
    if (isOpened) {
      this.endValue = -this.maxOffsetSize
      this.setState({
        offsetSize: -this.maxOffsetSize,
        _isOpened: true
      })
    } else {
      if (isDel) {
        this.endValue = 0
        this.setState({
          offsetSize: 0,
          _isOpened: false
        })
      } else {
        this.linear(this.state.offsetSize, 0, (value) => {
          this.endValue = value
          this.setState({
            offsetSize: value,
            _isOpened: false
          })
        })
      }
    }
    if (isChange) {
      this.props.onChange && this.props.onChange((isOpened as boolean))
    }
  }
  linear (from, to, cb) {
    const _this = this
    const duration = 200
    let timer: any = null
    let start = 0
    const during = Math.ceil(duration / 17)
    step()
    function step () {
      const value = _this.linearFn(start, from, to - from, during)
      start++
      if (start <= during) {
        timer = setTimeout(step, 17)
        cb(value)
      } else {
        clearTimeout(timer)
        cb(value)
      }
    }
  }
  linearFn (t, b, c, d) {
    return c * t / d + b
  }
  onDelete () {
    this._reset(false, true)
    this.props.onDelete && this.props.onDelete()
  }
  render () {
    const { offsetSize } = this.state
    return (
      <View
        className={classnames('swipe-action', this.actionClassName)}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        onTouchStart={this.handleTouchStart}
        style={{
          transform: `translateX(${offsetSize}px)`
        }}
      >
        {this.props.children}
        <View className={classnames('swipe-action__options', this.optionClassName)}>
          <View className='swipe-action__delete' onClick={this.onDelete.bind(this)}>删除</View>
        </View>
      </View>
    )
  }
}
