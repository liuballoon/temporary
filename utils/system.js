/**
 * 获取处理后的窗口信息
 */
const getWindowInfo = function() {
  const window = wx.getWindowInfo()
  const rate = 750 / window.windowWidth
  console.log(window, rate)
  return {
    rate,
    windowHeight: window.windowHeight * rate,
    // statusHeight: (window.statusBarHeight + 44) * rate
    statusHeight: (window.statusBarHeight + 44) * rate
  }
}

export {
  getWindowInfo
}
