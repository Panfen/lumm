const { getDataByType, showErrorInfo } = require('../../utils/index.js');

Page({
  data: {
    imgList: []
  },

  onLoad: function (options) {
    this.getCatList();
  },

  getCatList: async function () {
    const [err, imgList] = await getDataByType('gallery');
    imgList ? this.setData({ imgList }) : showErrorInfo(err);
  }
})