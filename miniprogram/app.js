//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'lijiangchen-6gcgn9nn7845c6fa',
        traceUser: true,
      })
    }
    this.globalData = {
      navigationBarHeight:0,//这个值整个导航栏的高度
	  	statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'] //状态栏的高度
    }
    this.topBarHeight();
  },
  
  topBarHeight(){
    var {top,height} = wx.getMenuButtonBoundingClientRect(); //胶囊按钮的位置
    var statusH = wx.getSystemInfoSync()['statusBarHeight']; //状态栏的位置
    var meneStatusHeight = top - statusH; //状态栏到胶囊按钮的距离
    var navigationBarHeight = statusH + height + meneStatusHeight * 2; //整个头部导航栏：状态栏+状态栏距离胶囊按钮的距离*2+胶囊高度
    this.globalData.navigationBarHeight=navigationBarHeight;
  }
})
