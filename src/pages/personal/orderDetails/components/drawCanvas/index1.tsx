import Taro, { Component } from '@tarojs/taro'
import { Canvas } from '@tarojs/components'
import './index.less'

type props = {
  info: keyValue,
  qrcode: string,
  logo: string,
  onSuccess: (path: string) => void
  onFail?: () => void
}
type state = {
  canvas: {
    width: number,
    height: number
  }
}

export default class DrawCanvas extends Component<props, state> {
  constructor (props) {
    super(props)
    this.state = {
      canvas: {
        width: 620,
        height: 3000 // 设置一个较大的高度，避免高度撑的太高，底部白色背景显示不全,
      }
    }
  }
  canvasId = String(new Date().getTime())
  systemInfo: any = Taro.getStorageSync('systemInfo')
  async componentDidMount () {
    const { info, qrcode, logo } = this.props
    const { canvas } = this.state
    try {
      const ctx = Taro.createCanvasContext(this.canvasId, this.$scope)
      const padding = this.rate(40)
      const width = this.rate(540)
      // 总计高度
      let totalHeight = 0

      // 画背景
      console.log('画背景')
      ctx.setFillStyle('#fff')
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      // ctx.restore()

      // 画封面图
      console.log('画封面图')
      const coverSize = width
      const coverObj: keyValue = await this.getCoverImgSize(info.goodsImage[0].url, coverSize, coverSize)
      ctx.drawImage(coverObj.path, coverObj.sx, coverObj.sy, coverObj.sWidth, coverObj.sHeight, padding, padding, coverSize, coverSize)

      totalHeight += (coverSize + padding)

      // 绘制价格
      // 优惠价
      console.log('绘制价格')
      ctx.setFillStyle('#FF3021')
      const font1 = this.rate(34)
      ctx.setFontSize(font1)
      ctx.fillText('¥', padding, totalHeight + this.rate(32) + font1)
      const font2 = this.rate(46)
      ctx.setFontSize(font2)
      ctx.fillText(info.moneyFixed, padding + font1, totalHeight + this.rate(22) + font2)
      const { width: font2Width } = ctx.measureText('499')
      // 划线价
      if (info.lineMoney) {
        ctx.setFillStyle('#777A80')
        const font3 = this.rate(26)
        const font3Left = padding + font1 + font2Width + this.rate(16)
        const font3Top = totalHeight + this.rate(37) + font3
        ctx.setFontSize(font3)
        ctx.fillText(`¥${info.lineMoney}`, font3Left, font3Top)
        // 划线价中的线
        // ctx.setStrokeStyle('#777A80')
        ctx.moveTo(font3Left, font3Top - this.rate(10))
        ctx.lineTo(font3Left + ctx.measureText(`¥${info.lineMoney}`).width, font3Top - this.rate(10))
        ctx.stroke()
      }

      totalHeight += this.rate(74)

      // 画标题
      console.log('画标题')
      ctx.setFillStyle('#232528')
      ctx.setFontSize(this.rate(28))
      totalHeight += this.rate(16)
      totalHeight += this.textRender(ctx, info.activityName, width, padding, totalHeight, this.rate(28), this.rate(12))
      console.log('画标题end', totalHeight)
      // 画描述
      console.log('画描述')
      if (info.goodsSoldPoint) {
        ctx.setFillStyle('#777A80')
        ctx.setFontSize(this.rate(22))
        totalHeight += this.rate(17)
        totalHeight += this.textRender(ctx, info.goodsSoldPoint, width, padding, totalHeight, this.rate(22), this.rate(10))
      }
      console.log('descHeight', totalHeight)

      // 画分割线
      ctx.setStrokeStyle('#B07D2E')
      ctx.setLineWidth(this.rate(2))
      totalHeight += this.rate(28)
      ctx.moveTo(padding, totalHeight)
      ctx.lineTo(padding + width, totalHeight)
      ctx.stroke()
      totalHeight += this.rate(2)
      console.log('splitLineHeight', totalHeight)

      // // 画二维码
      console.log('画二维码')
      const qrcodeSize = this.rate(170)
      totalHeight += this.rate(12)
      const qrcodeObj: keyValue = await this.getCoverImgSize(qrcode, qrcodeSize, qrcodeSize)
      ctx.drawImage(qrcodeObj.path, qrcodeObj.sx, qrcodeObj.sy, qrcodeObj.sWidth, qrcodeObj.sHeight, padding, totalHeight, qrcodeSize, qrcodeSize)

      // 覆盖二维码上的logo
      console.log('画覆盖二维码上的logo')
      ctx.save()
      ctx.beginPath()
      const scale = 133 / 280
      const logoSize = qrcodeSize * scale
      const logoObj: keyValue = await this.getCoverImgSize(logo, logoSize, logoSize)
      const cR = logoSize / 2
      const cX = padding + qrcodeSize / 2
      const cY = totalHeight + qrcodeSize / 2
      ctx.setFillStyle('#f00')
      ctx.arc(cX, cY, cR, 0, 2 * Math.PI)
      ctx.fill()
      ctx.clip()
      ctx.drawImage(logoObj.path, logoObj.sx, logoObj.sy, logoObj.sWidth, logoObj.sHeight, cX - cR, cY - cR, logoSize, logoSize)
      ctx.restore()

      // 画二维码旁边文字
      ctx.beginPath()
      const textFontSize = this.rate(26)
      const textLeft = padding + qrcodeSize + this.rate(14)
      ctx.setFillStyle('#333')
      ctx.setFontSize(textFontSize)
      // 长按图片
      const loogTagHeigh = totalHeight + this.rate(46) + textFontSize
      ctx.fillText('长按图片识别二维码', textLeft, loogTagHeigh)
      // 查看详情
      ctx.fillText('查看详情', textLeft, loogTagHeigh + this.rate(18) + textFontSize)

      totalHeight += qrcodeSize
      totalHeight += this.rate(34)

      console.log('totalHeight', totalHeight)
      await this.set({
        canvas: {
          ...this.state.canvas,
          height: totalHeight
        }
      })

      ctx.fill()
      ctx.draw(false, () => {
        Taro.canvasToTempFilePath({
          canvasId: this.canvasId,
          success: (res) => {
            console.log(res)
            this.props.onSuccess(res.tempFilePath)
          }
        }, this.$scope)
      })
    } catch (e) {
      this.props.onFail && this.props.onFail()
    }
  }
  // 获取比例尺寸
  rate (val) {
    // return val * (this.state.canvas.width / 310)
    return val * (this.state.canvas.width / 620)
  }
  set (state) {
    return new Promise(resolve => {
      this.setState(state, resolve)
    })
  }
  // 获取图片尺寸
  getCoverImgSize (src, maxWidth, maxHeight) {
    return new Promise<keyValue>(r => {
      Taro.getImageInfo({
        src
      }).then(res => {
        const { width, height, path } = res
        r({
          path,
          ...this.coverImg(maxWidth, maxHeight, width, height)
        })
      })
    })
  }
  // cover模式计算
  coverImg (box_w, box_h, source_w, source_h) {
    let sx = 0
    let sy = 0
    let sWidth = source_w
    let sHeight = source_h
    if (source_w > source_h || (source_w === source_h && box_w < box_h)) {
      sWidth = box_w * sHeight / box_h
      sx = (source_w - sWidth) / 2
    } else if (source_w < source_h || (source_w === source_h && box_w > box_h)) {
      sHeight = box_h * sWidth / box_w
      sy = (source_h - sHeight) / 2
    }
    return{
      sx,
      sy,
      sWidth,
      sHeight
    }
  }
  // 分割文本
  splitText (ctx, text, maxWidth) {
    const chr = text.split('')
    let temp = ''
    let arr: string[] = []
    for (let a = 0; a < chr.length; a++) {
      if (ctx.measureText(temp).width < maxWidth) {
        temp += chr[a]
      } else {
        arr.push(temp)
        temp = chr[a]
      }
    }
    if (temp) {
      arr.push(temp)
    }
    return arr
  }

  textRender (ctx, text, width, left, top, fontSzie, lineHeight) {
    let h = 0
    const textArr = this.splitText(ctx, text, width)
    textArr.forEach((item, index) => {
      if (index > 0) {
        h += (fontSzie + lineHeight)
        top += (fontSzie + lineHeight)
      } else {
        h += fontSzie
        top += fontSzie
      }
      ctx.fillText(item, left, top, width)
    })
    return h
  }
  render () {
    const { canvas } = this.state
    return (
      <Canvas className='canvas' style={{
        width: `${canvas.width}px`,
        height: `${canvas.height}px`
      }} canvasId={this.canvasId}></Canvas>
    )
  }
}
