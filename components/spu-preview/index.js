// components/spu-preview/index.js
Component({

  properties: {
    data: Object
  },

  observers: {
    'data': function (data) {
      if (!data) {
        return
      }
      if (!data.tags) {
        return
      }
      const tags = data.tags.split('#')
      this.setData({
        tags
      })
    }
  },

  data: {
    tags: []
  },

  methods: {
    onTapSpu(event) {
      const spuId = event.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/spu-detail/spu-detail?spuId=${spuId}`,
      })
    }
  }
})
