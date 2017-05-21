// pages/comment/comment.js
Page({
  data: {
    title: '',
    valid:'',
    comment:''
  },
  onLoad: function (options) {
    this.setData({
      title: options.title,
    })
  },
  bindKeyInput:function(e){
    var value = e.detail.value.trim();
    if(value.length > 0){
      this.setData({
        valid: 'valid',
        comment: value
      })
    }else{
      this.setData({
        valid: '',
      })
    }
  },
  submitAct:function(){
    if(this.data.comment.length > 0){
      wx.showToast({
        title: 'succed!',
        icon: 'success',
        duration: 3000,
        success: function () {
          wx.navigateBack();
        }
      });
    }
  }
})