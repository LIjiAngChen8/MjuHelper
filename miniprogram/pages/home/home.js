// pages/home/home.js
const LJCgetdate = require('../../util/GetDate.js');
const app = getApp();
const statusBarHeight = app.globalData.statusBarHeight;
const navigationBarHeight = (app.globalData.navigationBarHeight);
const containerHeight = navigationBarHeight - statusBarHeight;//这个是内容高度
Page({
  data: {
    timelist: [
      {
        xq: '一',
        day:'23'
      },
      {
        xq: '二',
        day:'24'
      },
      {
        xq: '三',
        day:'25'
      },
      {
        xq: '四',
        day:'26'
      },
      {
        xq: '五',
        day:'27'
      },
      {
        xq: '六',
        day:'28'
      },
      {
        xq: '日',
        day:'29'
      }

		],
		timeday:[
			[6,7,8,9,10,11,12],//9
			[13,14,15,16,17,18,19],
			[20,21,22,23,24,25,26],
			[27,28,29,30,1,2,3],//10
			[4,5,6,7,8,9,10],
			[11,12,13,14,15,16,17],
			[18,19,20,21,22,23,24],
			[25,26,27,28,29,30,31],
			[1,2,3,4,5,6,7],//11
			[8,9,10,11,12,13,14],
			[15,16,17,18,19,20,21],
			[22,23,24,25,26,27,28],
			[29,30,1,2,3,4,5],//12
			[6,7,8,9,10,11,12],
			[13,14,15,16,17,18,19],
			[20,21,22,23,24,25,26],
			[27,28,29,30,31,1,2],//1
			[3,4,5,6,7,8,9],
    ],
    booklist:[
      {
        bookurl:"cloud://lijiangchen-6gcgn9nn7845c6fa.6c69-lijiangchen-6gcgn9nn7845c6fa-1258885867/book/cext3.jpg",
        book:'叭叭叭把',
        teacher:'哈哈哈',
        time:'1-2',
        address:'666666'
      },
      {
        bookurl:"cloud://lijiangchen-6gcgn9nn7845c6fa.6c69-lijiangchen-6gcgn9nn7845c6fa-1258885867/book/cext2.png",
        book:'算法分析与设计B(R)',
        teacher:'吕岚',
        time:'3-4',
        address:'3A109'
      },
      {
        bookurl:"cloud://lijiangchen-6gcgn9nn7845c6fa.6c69-lijiangchen-6gcgn9nn7845c6fa-1258885867/book/cext3.jpg",
        book:'孤独是生命的礼物',
        teacher:'肖剑飞',
        time:'5-6',
        address:'1A666'
      },
      {
        bookurl:"cloud://lijiangchen-6gcgn9nn7845c6fa.6c69-lijiangchen-6gcgn9nn7845c6fa-1258885867/book/cext1.png",
        book:'孤独是生命的礼物',
        teacher:'肖剑飞',
        time:'7-8',
        address:'实D206'
      },
      {
        bookurl:"cloud://lijiangchen-6gcgn9nn7845c6fa.6c69-lijiangchen-6gcgn9nn7845c6fa-1258885867/book/cext1.png",
        book:'孤独是生命的礼物',
        teacher:'肖剑飞',
        time:'7-8',
        address:'实D206'
      },
    ],
    Mjuserver:[
      {
        sign:0,
        title:'成绩',
        iconurl:'/images/icon/cj.png'
      },
      {
        sign:0,
        title:'视频解析',
        iconurl:'/images/icon/video.png'
      },
      {
        sign:0,
        title:'课程表',
        iconurl:'/images/icon/date.png'
      },
      {
        sign:0,
        title:'红包',
        iconurl:'/images/icon/waimai.png'
      },
      {
        sign:0,
        title:'更多',
        iconurl:'/images/icon/more.png'
      },
      {
        sign:1,
        title:'后勤',
        iconurl:'/images/icon/hq.png'
      },
      {
        sign:1,
        title:'校历',
        iconurl:'/images/icon/XL.png'
      },
      {
        sign:1,
        title:'图书馆',
        iconurl:'/images/icon/library.png'
      },
      {
        sign:1,
        title:'座位预定',
        iconurl:'/images/icon/desk.png'
      },
      {
        sign:1,
        title:'校友会',
        iconurl:'/images/icon/xyh.png'
      },
      {
        sign:1,
        title:'考试安排',
        iconurl:'/images/icon/ks.png'
      },
      {
        sign:1,
        title:'第二课堂',
        iconurl:'/images/icon/date.png'
      },
      {
        sign:1,
        title:'第三课堂',
        iconurl:'/images/icon/date.png'
      },
    ],
    bannner:[
      {
        url:'cloud://lijiangchen-6gcgn9nn7845c6fa.6c69-lijiangchen-6gcgn9nn7845c6fa-1258885867/bannner/test1.png'
      },
      {
        url:'cloud://lijiangchen-6gcgn9nn7845c6fa.6c69-lijiangchen-6gcgn9nn7845c6fa-1258885867/bannner/test.png'
      },
    ],
    statusBarHeight: statusBarHeight + 'px',
    navigationBarHeight: navigationBarHeight + 'px',
    containerHeight: containerHeight + 'px',
    timeindex:(new Date).getDay()-1,//今天
    week:'1',//第几周
    touchS : [0,0],//按下坐标X
    touchE : [0,0]//按下坐标Y
  },
  //单击日期改变样式-下标
  clicktime: function(e){
    this.setData({ timeindex:e.currentTarget.dataset.index});
  },
  //按下获取坐标并赋值
  handletouchtart: function (e) {
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.data.touchS = [sx,sy]
  },
  handletouchmove: function (e) {
    let ex = e.touches[0].pageX;
    let ey = e.touches[0].pageY;
    this.data.touchE = [ex,ey]
  },
  //结束触摸开始判断
  touchEnd: function(e){
    let start = this.data.touchS
    let end = this.data.touchE
    if(end[0]!=0){
      if(start[0] < end[0] - 20){
        if(this.data.week>1){
          this.setData({
            week:Number(this.data.week)-1
          })
          this.changetime(Number(this.data.week)-1)
        }
        // console.log('右滑')
      }else if(start[0] > end[0] + 20){
        // console.log('左滑')
        if(this.data.week<18){
          this.setData({
            week:Number(this.data.week)+1
          })
          this.changetime(Number(this.data.week)-1)
        }
      }
    }
    this.data.touchE=[0,0]
    this.data.touchS=[0,0]
	},
	changetime:function(index){
		let newweek=[]
		let a=this.data.timeday[index]
		var b=['一','二','三','四','五','六','日']
		for ( let i = 0; i < 7; i++) {
			newweek[i]=[a[i],b[i]]
		}
		this.setData({
			timelist:newweek
		})
  },
  Mjuserver:function(e){
    let index=e.currentTarget.dataset.index
    console.log(index)
    switch (index) {
      case 0 :
        console.log('点击了选项1');
        break;
      case 1:
        console.log('点击了选项2');
        break;
      case 2:
        console.log('点击了选项3');
        break;
      case 3:
        console.log('点击了选项4');
        break;
      case 4:
        for (let i = 5; i < this.data.Mjuserver.length; i++) {
          if(this.data.Mjuserver[i].sign==1){
            this.setData({
               ['Mjuserver[' + i + '].sign']:0,
               ['Mjuserver[' + 4 + '].title']:'收起'
            })
          }else{
            this.setData({
               ['Mjuserver[' + i + '].sign']:1,
               ['Mjuserver[' + 4 + '].title']:'更多'
            })
          }
        };
        break;
    }
  },
  onLoad: function (options) {
      this.changetime(0)
      console.log(this.data.timeindex)
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