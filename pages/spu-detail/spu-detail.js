import { Spu } from "../../models/spu"

Page({

  data: {
    spu: null
  },

  onLoad: function (options) {
    this.initData(options.spuId)
  },

  async initData(spuId) {
    const spu = await Spu.getSpuDetailById(spuId)
    this.setData({
      spu
    })
  },

  onReady: function () {

  },

  onShareAppMessage: function () {

  }
})