// pages/good/good.js
var app = getApp();
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    currentPic:1,
    totalPic:3,
    imgList: [
      '../../images/pages/good/pic1.png',
      '../../images/pages/good/pic2.png',
      '../../images/pages/good/pic3.png'
    ]
  },
  onLoad: function (options) {
    console.log(options)
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },

  //滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  //点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  //切换图片
  swiperPicAct:function(e){
    this.setData({
      currentPic: e.detail.current + 1
    });
  }
})  