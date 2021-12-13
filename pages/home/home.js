import { Banner } from "../../models/banner"
import { Navigation } from "../../models/navigation"

Page({

  data: {
    banner: null,
    navigations: []
  },

  onLoad: function (options) {
    this.initData()
  },

  async initData() {
    const banner = await Banner.getHomeTopBanner()
    const navigations = await Navigation.getAllNavigations()
    this.setData({
      banner,
      navigations,
    })
  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})