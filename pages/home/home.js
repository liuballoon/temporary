import { Banner } from "../../models/banner"
import { Navigation } from "../../models/navigation"
import { Spu } from "../../models/spu"

Page({

  data: {
    banner: null,
    navigations: [],
    spus: null
  },

  onLoad: function (options) {
    this.initData()
  },

  async initData() {
    const banner = await Banner.getHomeTopBanner()
    const navigations = await Navigation.getAllNavigations()
    const spus = await Spu.getSpu()
    this.setData({
      banner,
      navigations,
      spus
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