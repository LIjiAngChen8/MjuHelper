const app = getApp();
const statusBarHeight = app.globalData.statusBarHeight;
const navigationBarHeight = (app.globalData.navigationBarHeight);
const containerHeight = navigationBarHeight - statusBarHeight;//这个是内容高度
console.log(statusBarHeight,navigationBarHeight,containerHeight)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: statusBarHeight + 'px',
    navigationBarHeight: navigationBarHeight + 'px',
    containerHeight: containerHeight + 'px',
    userFans:{
      fans:231,
      attention:66,
      like:2022
    },
    userInfo:{
      nickName:'李江辰',
      college:'数学与数据科学(软件学院)'
    },
    results:[
      {
      value:2.33,
      title:'平均绩点'
      },
      {
        value:138,
        title:'已获学分'
        },
        {
          value:3.225,
          title:'第二课堂'
        },
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getScancode: function() {
    var _this = this;
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})