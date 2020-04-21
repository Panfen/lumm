const { getDataByType, showErrorInfo } = require('../../utils/index.js')

Page({
  data:{
    articleDetail: {},
  },

  onLoad: function (options) {
    this.getArticleDetail(options.id)
  },

  getArticleDetail: async function(id) {
    const [err, article] = await getDataByType('article', { article_id: id })
    article ? this.setData({ articleDetail:  article[0] }) : showErrorInfo(err)
  }

})