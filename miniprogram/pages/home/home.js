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
        bookurl:"cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/book/71647418009_.png",
        book:'网络基础设计',
        teacher:'户根勤',
        time:'3-4',
        address:'3A109'
      },
      {
        bookurl:"cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/book/716474180019_.png",
        book:'高等数学',
        teacher:'某某某',
        time:'1-2',
        address:'666666'
      },
      {
        bookurl:"cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/book/71647009_.png",
        book:'我身体里的人造星星',
        teacher:'[爱尔兰] 希内德·格利森',
        time:'5-6',
        address:'1A666'
      },
      {
        bookurl:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/book/716474189_.png',
        book:'测试',
        teacher:'测试',
        time:'7-8',
        address:'实D206'
      },
      {
        bookurl:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/book/1111.png',
        book:'孤独是生命的礼物',
        teacher:'测试',
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
        url:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/4cb9c1d3-0722-4f74-bf8e-8545987d8fc9.jpg'
      },
      {
        url:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/fa83b5dc-cf16-4050-9e2c-7de7401e7181.jpg'
      },
    ],
    recommend:[
{
  avatar:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/aI/211647419727_.pic.jpg',
  img:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/recommend/151647419123_.pic.jpg',
  nickName:'Xiao晓',
  like:false,
  likeNumber:162,
  text:'收到闽江学院录取通知书啦！'
},
{
  avatar:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/aI/221647419737_.pic.jpg',
  img:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/recommend/141647419123_.pic.jpg',
  nickName:'懒人LeE',
  like:false,
  likeNumber:555,
  text:'食堂的饭！！'
},
{
  avatar:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/aI/201647419717_.pic.jpg',
  img:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/recommend/181647419124_.pic_hd.jpg',
  nickName:'Yoohoow',
  like:false,
  likeNumber:35012,
  text:'福州地铁|纯欲☁️奶里奶气穿搭之宿舍对镜自拍'
},
{
  avatar:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/aI/191647419705_.pic.jpg',
  img:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/recommend/161647419123_.pic.jpg',
  nickName:'别烦我',
  like:false,
  likeNumber:9262,
  text:'真的很绝！'
},
{
  avatar:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/aI/231647419955_.pic.jpg',
  img:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/recommend/181647419124_.pic_hd.jpg',
  nickName:'奶黄包',
  like:false,
  likeNumber:10005,
  text:'真的很绝！'
},
{
  avatar:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/aI/231647419955_.pic.jpg',
  img:'cloud://mjuhelper-2glwz5lb310efc94.6d6a-mjuhelper-2glwz5lb310efc94-1258885867/recommend/121647418688_.pic.jpg',
  nickName:'不知名网友',
  like:false,
  likeNumber:162,
  text:'老师真好看！'
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
  //点击书本进入书本详情页
  toBookDetails(e){
    // console.log(e.currentTarget.dataset.course)
    let book=e.currentTarget.dataset.course.book
    let bookUrl=e.currentTarget.dataset.course.bookurl
    wx.navigateTo({
      url: '../course/details?book='+book+'&bookUrl='+bookUrl
    })
  },
  //进入生活日常(daily)详情页
  toDaily(){
    wx.navigateTo({
      url: '../discovery/daily/daily',
    })
  },
  onLoad: function (options) {
      this.changetime(0)
      console.log(this.data.timeindex)
  }
})