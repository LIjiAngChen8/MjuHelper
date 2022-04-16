const db = wx.cloud.database();
Page({
  data: {
    courseInfo:[],//课程信息
    teacherList:[],//课程授课教师
    tabIndex: 0,//选项下标
    commentList: [],//评论数据
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: options.book || "" });
    this.getCommment(options.courseID)
    this.getTeacher(options.courseID)
    this.getCourseInfo(options.courseID)
  },
  changeTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index,
    });
  },
  getCourseInfo(courseId){
    db.collection('courses').where({courseID:courseId}).get().then(res => {
      this.setData({
        courseInfo:res.data[0]
      })
    })
  },
  getTeacher(courseId){
    db.collection('teachers').where({course:courseId}).get().then(res => {
      this.setData({
        teacherList:res.data
      })
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
});
