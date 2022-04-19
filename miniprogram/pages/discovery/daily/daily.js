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
      docId:'bb4c2515625c0ef300404c9d1815d76e'
    })
    // this.getDetails(options.id)
    this.getDetails('bb4c2515625c0ef300404c9d1815d76e')
    wx.setNavigationBarTitle({ title: '' });
    try {
      var value = wx.getStorageSync('likes')
      if (value) {
        value.forEach(item => {
          if(item===this.data.docId){
            this.setData({
              hasLike:true
            })
          }
        });
      }else{
        db.collection('likes').where({uid:'d2fe6f206258023a06ba281d4a217500'}).field({
          _id:false,
          likeData:true
        }).get().then(res => {
          console.log('获取服务器点赞列表')
          wx.setStorage({
            key:"likes",
            data:res.data[0].likeData
          })
        })
      }
    } catch (e) {}
    try {
      var value = wx.getStorageSync('collect')
      if (value) {
        value.forEach(item => {
          if(item===this.data.docId){
            this.setData({
              hasCollect:true
            })
          }
        });
      }else{
        db.collection('collects').where({uid:'d2fe6f206258023a06ba281d4a217500'}).field({
          _id:false,
          articleData:true
        }).get().then(res => {
          console.log('获取服务器收藏列表')
          wx.setStorage({
            key:"collect",
            data:res.data[0].articleData
          })
        })
      }
    } catch (e) {}
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
