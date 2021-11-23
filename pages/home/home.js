import { Banner } from "../../models/banner"

Page({

  data: {
    banner: null
  },

  onLoad: function (options) {
    this.initData()
  },

  async initData() {
    const banner = await Banner.getHomeTopBanner()
    this.setData({
      banner
    })
  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})