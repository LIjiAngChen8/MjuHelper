const db = wx.cloud.database();
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    commentList: Array,
  },
  observers: {
    'commentList': function (val) {
      this.setData({
        copyList:val
      })
    }
  },
  data: {
    copyList:[],
    inputKey: "",
    bottom: 0,
    copyBottom: 0,
    tips: "有爱评论，说点好听的～",
  },
  methods: {
    sendComment(id) {
      id ='course00001'
      let content= this.data.inputKey
      if(content !==''|| content !==null){
        db.collection("comments").add({
          data: {
            course: 'course00001',
            content,
            like: 0,
            time: db.serverDate(),
            from: "636050766258033305ba63891ef8a0d6",
          },
          success: (res) => {
            this.setData({
              inputKey:''
            })
            this.triggerEvent('getCommment', {id: id});
          }
        });
      }
    },
    comment(e) {
      console.log(e.currentTarget.dataset.item);
      console.log("二级下标", e.currentTarget.dataset.cindex);
      console.log("一级下标", e.currentTarget.dataset.index);
      let nickName = "回复 @" + e.currentTarget.dataset.item.nickName;
      this.focus1();
      this.setData({
        focus: true,
        tips: nickName,
      });
    },
    goToUser(e) {
      console.log("跳转至" + e.currentTarget.dataset.name + "的资料页");
    },
    showMore(e) {
      console.log(1);
    },
    getInput(e) {
      this.setData({
        inputKey: e.detail.value,
      });
    },
    focus(e) {
      let height = e.detail.height;
      let copy = this.data.copyBottom;
      if (height !== copy) {
        this.setData({
          bottom: height,
          copyBottom: height,
        });
      }
    },
    //获得焦点
    focus1() {this.setData({bottom: this.data.copyBottom,})},
    //失去焦点收起软键盘
    blur() {this.setData({bottom: 0,tips: "有爱评论，说点好听的～",})},
  },
});
