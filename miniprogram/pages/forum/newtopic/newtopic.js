// miniprogram/pages/forum/newtopic/newtopic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicText: '',
    imgList: []
  },

  onTopicTextChange: function(e) {
    this.setData({ topicText: e.detail.value })
  },

  chooseImage: function () {
    wx.chooseImage({
      complete: (res) => {
        const { imgList } = this.data;
        imgList.push(...res.tempFilePaths);
        this.setData({ imgList })
      },
    })
  },

  onSubmitTopic: function () {
    const { topicText, imgList } = this.data;
    wx.getUserInfo({
      complete: (res) => {
        console.log(res)
        const { avatarUrl, nickName } = res.userInfo;
        const params = {
          avatar: avatarUrl,
          name: nickName,
          open_id: '',
          pics: imgList,
          text: topicText,
          type: 3
        }
        const db = wx.cloud.database();
        db.collection('forum').add({
          data: params,
          success: res => {
            wx.showToast({
              title: '发布成功',
            })
            wx.navigateBack()
          },
          fail: err => {
            wx.showToast({
              title: '啊哦，发布失败了',
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


})