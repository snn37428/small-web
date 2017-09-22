//app.js
App({
  onLaunch: function () {
    this.login();
  },
  login : function () {
    if (wx.getStorageSync("token")) {
      return;
    }
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          url: "http://ty.com" + '/login/in?code',
          data: {
            code: res.code
          },
          success: function (res) {
            console.log(res.data.code + "343214");
            if (res.data.code != 0) {
              // 登录错误 
              wx.hideLoading();
              wx.showModal({
                title: '提示',
                content: '无法登录，请重试',
                showCancel: false
              })
              return;
            }
            wx.setStorage({
              key: "token",
              data: res.data.data.token
            })
          },
          fail: function () {
            wx.showModal({
              title: '提示',
              content: '无法登录，请重试',
              showCancel: false
            })
            return;
          }
        })
      }
    })
      
   
  },
   globalData:{
    userInfo:null,
    token:null,
    subDomain: "611a15f1e4999d724a5a42a4acb05cbd",
    url:"http://api.cnmmsc.org"
  }
})
