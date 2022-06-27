import { Category } from "../../models/category"
import { getWindowInfo } from "../../utils/system"

Page({

  data: {
    rootCategories: [],
    subCategories: [],
    rootId: '',
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
    const rootId = Category.getDisplayRootId(rootCategories)
    console.log(rootId)
    const subCategories = await Category.getSubCategoriesByRootId(rootId)
    this.setData({
      rootCategories,
      subCategories,
      rootId
    })
  },

  async onChangeSegment(event) {
    const rootId = event.detail.activeKey
    const subCategories = await Category.getSubCategoriesByRootId(rootId)
    this.setData({
      subCategories
    })
  },

  onShareAppMessage: function () {

  }
})
