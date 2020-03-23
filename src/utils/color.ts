const parseColor = function (hexStr) {
  return hexStr.length === 4
    ? hexStr
        .substr(1)
        .split('')
        .map(function (s) {
          return 0x11 * parseInt(s, 16)
        })
    : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(
        function (s) {
          return parseInt(s, 16)
        }
      )
}

// zero-pad 1 digit to 2
const pad = function (s) {
  return s.length === 1 ? '0' + s : s
}

export function getColorGradient (start, end, steps, gamma = 1) {
  let i
  let j
  let ms
  let me
  const output: string[] = []
  const so: any[] = []
  const normalize = function (channel) {
    return Math.pow(channel / 255, gamma)
  }
  start = parseColor(start).map(normalize)
  end = parseColor(end).map(normalize)
  for (i = 0; i < steps; i++) {
    ms = i / (steps - 1)
    me = 1 - ms
    for (j = 0; j < 3; j++) {
      so[j] = pad(
        Math.round(
          Math.pow(start[j] * me + end[j] * ms, 1 / gamma) * 255
        ).toString(16)
      )
    }
    output.push('#' + so.join(''))
  }
  return output
}

export function formatColorRGB (sColor) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  sColor = sColor.toLowerCase()
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    // 处理六位的颜色值
    const sColorChange: any[] = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2), 16))
    }
    return sColorChange
  } else {
    return sColor
  }
}
