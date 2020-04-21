const { getDataByType, showErrorInfo } = require('../../utils/index.js');

Page({
  data: {

  },

  onLoad: async function(options) {
    this.getData();
  },

  getData: async function() {
    // 获取首页banner
    const [berr, banner] = await getDataByType('banner');
    banner ? this.setData({ imgUrls: banner }) : showErrorInfo(berr);

    // 获取首页列表数据
    const [terr, topic] = await getDataByType('topic');
    topic ? this.setData({ content: topic }) : showErrorInfo(terr);
  }

})