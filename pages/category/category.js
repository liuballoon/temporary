import { Category } from "../../models/category"
import { getWindowInfo } from "../../utils/system"

Page({

  data: {
    rootCategories: [],
    subCategories: [],
    activeKey: '',
    windowHeight: 0
  },

  onLoad: function (options) {
    this.initWindow()
    this.initData()
  },

  initWindow() {
    const window = getWindowInfo()
    this.setData({
      windowHeight: window.windowHeight - 1
    })
  },

  async initData() {
    const rootCategories = await Category.getRootCategories()
    const activeKey = Category.getActiveKey(rootCategories)
    const subCategories = await Category.getSubCategoriesByRootId(activeKey)
    this.setData({
      rootCategories,
      subCategories,
      activeKey
    })
  },

  onChangeSegment(event) {
    const rootId = event.detail.activeKey
  },

  onShareAppMessage: function () {

  }
})
