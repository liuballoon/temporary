/**
 * 获取处理后的窗口信息
 */
const getWindowInfo = function() {
  const window = wx.getWindowInfo()
  const rate = 750 / window.windowWidth
  console.log('window', window, rate)
  return {
    screenWdith: window.screenWidth,
    screenHeight: window.screenHeight,
    windowWdith: window.windowWidth * rate,
    windowHeight: window.windowHeight * rate
  }
}

/**
 * px转换rpx
 * 
 * @param {*} target 
 */
const px2rpx = function(target) {
  const info = wx.getWindowInfo()
  const rate = 750 / info.windowWidth
  return target * rate
}

export {
  px2rpx
}
