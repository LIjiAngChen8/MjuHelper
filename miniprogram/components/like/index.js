const db = wx.cloud.database();
const util = require('../../util/util')
const _ = db.command;
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    isLike: {
      type: Boolean,
      value: false,
    },
    num: {
      types: Number,
      value: 0,
    },
    docId:{
      type:String,
      value:''
    },
    fontSize:{
      type:String,
      value:28
    },
    iconSize:{
      type:String,
      value:28
    }
  },
  observers: {
    isLike: function (val) {
      this.setData({
        isShow: val,
      });
    },
    num: function (val) {
      this.setData({
        likeNum: val,
      });
    },
  },
  data: {
    isShow: false,
    likeNum: 0,
  },
  methods: {
    changeState: util.throttle(function () {
      if(this.data.docId!==''||this.data.docId!==undefined||this.data.docId!==null){
        let num = this.data.isShow ? -1 : 1;
        wx.cloud.callFunction({
          name: "incLike",
          data: {
            doc: "bb4c2515625c0ef300404c9d1815d76e",
            name: "article",
            num,
          },
        });
        //操作喜欢数据表
        if (this.data.isShow) {
          db.collection("likes")
            .where({
              uid: "d2fe6f206258023a06ba281d4a217500",
            })
            .update({
              data: {
                likeData: _.pop([this.properties.docId]),
              },
            });
            this.pop()
        } else {
          db.collection("likes")
            .where({
              uid: "d2fe6f206258023a06ba281d4a217500",
            })
            .update({
              data: {
                likeData: _.unshift([this.properties.docId]),
              },
            });
            this.add()
        }
        this.setData({
          likeNum: parseInt(this.data.likeNum) + num,
          isShow: !this.data.isShow,
        });
      }
    }, 600),
    add(){
      var likes=wx.getStorageSync('likes')||[]
      var a=[this.properties.docId]
      wx.setStorageSync('likes',a.concat(likes))
    },
    pop(){
      var likes=wx.getStorageSync('likes')||[]
      var index =likes.indexOf(this.properties.docId)
      let arrays = []
      for (var i = 0; i< likes.length; i++) {
        if (i != index) {
          arrays.push(likes[i])
        }
      }
      wx.setStorageSync('likes', arrays)
    }
  },
});
