import { Category } from "../../models/category"

Page({

  data: {
    rootCategories: [],
    activeKey: 0,
    segmentHeight: 0
  },

  onLoad: function (options) {
    this.initWindow()
    this.initData()
  },

  /**
   * 初始化窗口数据
   */
  initWindow() {
    const window = wx.getWindowInfo()
    console.log('window', window)
    this.setData({
      segmentHeight: window.windowHeight * window.pixelRatio
    })
    console.log('height', this.data.segmentHeight)
  },

  async initData() {
    const rootCategories = await Category.getRootCategories()
    // const subCategories = await Category.getSubCategoriesByRootId()
    const activeKey = Category.getActiveKey(rootCategories)
    this.setData({
      rootCategories,
      activeKey
    })
  },

  onShareAppMessage: function () {

  }
})
