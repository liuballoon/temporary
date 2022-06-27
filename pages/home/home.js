import { Banner } from "../../models/banner"
import { Navigation } from "../../models/navigation"
import { Spu } from "../../models/spu"
import { getWindowInfo } from "../../utils/system"

Page({

  data: {
    banner: null,
    navigations: [],
    spus: null,
    statusHeight: ''
  },

  onLoad: function (options) {
    this.initData()
  },

  async initData() {
    const banner = await Banner.getHomeTopBanner()
    const navigations = await Navigation.getAllNavigations()
    const spus = await Spu.getSpu()
    const statusHeight = getWindowInfo().statusHeight
    console.log(statusHeight)
    this.setData({
      banner,
      navigations,
      spus,
      statusHeight
    })
    wx.lin.renderWaterFlow(this.data.spus.items)  // 渲染商品瀑布流
  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})