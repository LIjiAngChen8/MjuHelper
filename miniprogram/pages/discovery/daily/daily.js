const db = wx.cloud.database();
Page({
  data: {
    swiperHeight: 0,
    commentList: [],//评论数据
    bannerlist: [
      "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/dc479b6d-ed3c-4740-97e7-8c06227eff8e.JPG",
      "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/fcfbe775-ed3a-4f6b-a084-74ce8fe02e64.JPG",
      "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/653f8f67-f136-4881-95ec-016b049319b1.JPG",
      "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/39f4aa8e-02f1-41ed-be6e-bc1219818d05.JPG",
      "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/81bf280e-8042-44d8-89d4-f261bdc7eb85.JPG",
      "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/b46e13ea-57d1-4599-89b3-20cd3a1764ed.JPG",
    ],
  },
  onLoad: function (options) {
    this.getCommment('course00001')
    wx.setNavigationBarTitle({ title: '' });
  },
  getCommment(e){
    let id= ''
    id =typeof e == 'object'?e.detail.id:e
    if(id!==''){
      wx.cloud
      .callFunction({
        name: "getComments",
        data: { course: id },
      })
      .then((res) => {
        this.setData({
          commentList: res.result.list,
        });
      })
    }
  },
  imageLoad: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //窗口高度
    var imgW = e.detail.width; //获取图片真实宽度
    var imgH = e.detail.height; //获取图片真实高度
    var swiperH = Math.ceil((winWid * imgH) / imgW);
    swiperH = swiperH > 510 ? 500 : swiperH;
    if (this.data.swiperHeight < swiperH) {
      this.setData({
        swiperHeight: swiperH,
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
