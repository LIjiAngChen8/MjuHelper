Page({
    data: {
        navId:0,
        fansList:[
          {
            uid:123456,
            avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/54514e2b-4439-4936-bad7-0ecb8210836a.jpg',
            nickName:'HGXIN',
            college:'外国语学院',
            introduce:'谢谢关注｜分享每日的校园趣事💫',
            fansState:0
          },
          {
            uid:123456,
            avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/67e93ef1-125e-44a9-8dfe-3f4c7da7aaf0.jpg',
            nickName:'HGXIN',
            college:'外国语学院',
            introduce:'谢谢关注｜分享每日的校园趣事💫',
            fansState:1
          },
          {
            uid:123456,
            avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/f50e7f36-b1fb-483b-b091-c10f624e7442.jpeg',
            nickName:'小陈要吃草莓🍓',
            college:'美术学院',
            introduce:'穿搭参考163｜82斤喜欢普拉提的健身女孩',
            fansState:2
          },
          {
            uid:123456,
            avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/aa0aa573-dfd0-499b-ac8b-b93e7be07fe2.jpg',
            nickName:'二两月亮',
            college:'新闻传媒学院',
            introduce:'喝酒会脸红的人心地善良',
            fansState:2
          },
          {
            uid:123456,
            avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/1fc2b0a1-195b-4556-ba24-6e0a56904005.jpg',
            nickName:'Muyasinn',
            college:'音乐学院',
            introduce:'看心情发日常！',
            fansState:2
          },
          {
            uid:123456,
            avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/aa0aa573-dfd0-499b-ac8b-b93e7be07fe2.jpg',
            nickName:'二两月亮',
            college:'新闻传媒学院',
            introduce:'喝酒会脸红的人心地善良',
            fansState:2
          },
          {
            uid:123456,
            avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/aa0aa573-dfd0-499b-ac8b-b93e7be07fe2.jpg',
            nickName:'二两月亮',
            college:'新闻传媒学院',
            introduce:'喝酒会脸红的人心地善良',
            fansState:2
          },
          {
            uid:123456,
            avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/aa0aa573-dfd0-499b-ac8b-b93e7be07fe2.jpg',
            nickName:'二两月亮',
            college:'新闻传媒学院',
            introduce:'喝酒会脸红的人心地善良',
            fansState:2
          },
          {
            uid:123456,
            avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/aa0aa573-dfd0-499b-ac8b-b93e7be07fe2.jpg',
            nickName:'二两月亮',
            college:'新闻传媒学院',
            introduce:'喝酒会脸红的人心地善良',
            fansState:2
          },
          {
            uid:123456,
            avatar:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/aa0aa573-dfd0-499b-ac8b-b93e7be07fe2.jpg',
            nickName:'二两月亮',
            college:'新闻传媒学院',
            introduce:'喝酒会脸红的人心地善良',
            fansState:2
          },
        ]
    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: options.title
          })
    },
    //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      navId: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;
    if (that.data.navId === e.target.dataset.current){
        return false;
    }else{
      that.setData({
        navId: e.target.dataset.current
      })
    }
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