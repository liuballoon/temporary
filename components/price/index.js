// components/price/index.js
Component({

  properties: {
    value: String
  },

  observers: {
    'value': function (value) {
      if (!value) {
        return
      }
      const arr = value.split('.')
      this.setData({
        amount: arr[0],
        decimal: arr.length == 2 ? arr[1] : ''
      })
    }
  },

  data: {
    amount: '00',
    decimal: ''
  },

  methods: {

  }
})
