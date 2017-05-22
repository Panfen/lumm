// pages/topic/topic.js
var app = getApp();
Page({
  data: {
    title: '',
    cover: '',
    desc: '',
    view: 167,
    like: 23,
    time:'2017-05-18',
    remarks: [
      {
        username: '小雨',
        avatar: '../../images/pages/avatar1.jpg',
        content: '希望早日找到，喵喵的~',
        time: '2 minute(s) ago'
      },
      {
        username: '夏天的雪',
        avatar: '../../images/pages/avatar2.jpg',
        content: '会不会和我家那只苏格兰折耳一起私奔啦？',
        time: '2 minute(s) ago'
      }
    ],
  },
  onLoad: function (options) {
    this.setData({
      title: options.title,
      cover: options.img,
      desc: options.desc
    });
  },
  onShow:function(){
    var that = this;
    var remarks = this.data.remarks;
    wx.getStorage({
      key: 'comment',
      success: function (res) {
        app.getUserInfo(function (userInfo) {
          var newComment = {
            username: userInfo.nickName,
            avatar: userInfo.avatarUrl,
            content: res.data.content,
            time: '1 minute ago'
          };
          remarks.unshift(newComment);
          that.setData({
            remarks: remarks
          });
        });
      },
    });
  }
})