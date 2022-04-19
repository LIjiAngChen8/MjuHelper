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
        }
        this.setData({
          likeNum: this.data.likeNum + num,
          isShow: !this.data.isShow,
        });
      }
    }, 600),
  },
});
