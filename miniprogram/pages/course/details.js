const db = wx.cloud.database();
Page({
  data: {
    details: {
      bookName: "",
      bookCover: "",
    },//课程信息
    tabIndex: 0,//选项下标
    commentList: [],//评论数据
  },
  changeTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index,
    });
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
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: options.book || "" });
    this.getCommment('course00001')
    let bookCover = options.bookUrl;
    let bookName = options.book;
    this.setData({
      details: {
        bookCover,
        bookName,
      },
    });
  },
});
