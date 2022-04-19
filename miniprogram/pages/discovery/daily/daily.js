const db = wx.cloud.database();
const _ = db.command
Page({
  data: {
    swiperHeight: 0,
    commentList: [],//评论数据
    details: {},
    docId:'',
    hasLike:false,
    hasCollect:false
  },
  onLoad: function (options) {
    this.getCommment('course00001')
    this.setData({
      docId:options.id
    })
    this.getDetails(options.id)
    wx.setNavigationBarTitle({ title: '' });
    this.isHasCollect()//判断是否收藏
    this.isHasLike()//判断是否喜欢
  },
  isHasCollect(){
    var value = wx.getStorageSync('collects')
    console.log('收藏：', value)
    if (value) {
      value.forEach(item => {
        if(item===this.data.docId){
          this.setData({
            hasCollect:true
          })
        }
      });
    }
  },
  isHasLike(){
    var value = wx.getStorageSync('likes')
    console.log('喜欢：', value)
    if (value) {
      value.forEach(item => {
        if(item===this.data.docId){
          this.setData({
            hasLike:true
          })
        }
      });
    }
  },
  getDetails(id){
    wx.cloud
      .callFunction({
        name: "getDetails",
        data: { id },
      })
      .then((res) => {
        this.setData({
          details: res.result.list[0],
        });
    })
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
});
