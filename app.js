//app.js
App({
  onLaunch: function () {
    this.getSysInfo();
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (r) {
          var code = r.code;
          if(code){
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            });
          }
        }
      })
    }
  },
  getSysInfo:function(){
    var that = this;
    if (that.globalData && that.globalData.sysInfo && that.globalData.sysInfo.windowHeight){
      return that.globalData.sysInfo;
    }
    return wx.getSystemInfo({
      success: function(res) {
        that.globalData.sysInfo = res;
        return res;
      },
      fail:function(){
        return 'fail to get system info!'
      }
    })
  },
  globalData:{
    userInfo:null,
    sysInfo:null,
    hah:'hhahahah'
  }
})