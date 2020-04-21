const { getDataByType, showErrorInfo } = require('../../utils/index.js')

Page({
  data: {
  	currentType: '0',
  	list: []
  },

  onLoad: function(options) {
    this.getData()
  },

  getData: async function() {
  	const db = wx.cloud.database()
  	const query = this.data.currentType === '0' ? { type: db.command.in(['0', '1', '2', '3', '4']) } : { type: this.data.currentType }
  	const [err, list] = await getDataByType('forum', query)
    list ? this.setData({ list }) : showErrorInfo(berr)
  },

  onChangeType: function (e) {
  	this.setData({ currentType: e.currentTarget.dataset.type })
  	this.getData()
  }

})