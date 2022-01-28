/**
 * 获取处理后的窗口信息
 */
const getWindowInfo = function() {
  const window = wx.getWindowInfo()
  const rate = 750 / window.windowWidth
  return {
    rate,
    windowHeight: window.windowHeight * rate
  }
}

export {
  getWindowInfo
}
