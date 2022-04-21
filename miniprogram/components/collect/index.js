const util = require("../../util/util");
const db = wx.cloud.database();
const _ = db.command;
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    isCollect: {
      type: Boolean,
      value: false,
    },
    num: {
      types: Number | String,
      value: 0,
    },
    docId: {
      type: String,
      value: "",
    },
  },
  observers: {
    isCollect: function (val) {
      this.setData({
        isShow: val,
      });
    },
    num: function (val) {
      this.setData({
        collectNum: val,
      });
    },
  },
  data: {
    isShow: false,
    collectNum: 0,
  },
  methods: {
    changeState: util.throttle(function (e) {
      if (
        this.data.docId !== "" ||
        this.data.docId !== undefined ||
        this.data.docId !== null
      ) {
        let num = this.data.isShow ? -1 : 1;
        wx.cloud.callFunction({
          name: "incCollect",
          data: {
            doc: this.properties.docId,
            name: "article",
            num,
          },
        });
        if (this.data.isShow) {
          db.collection("collects")
            .where({
              uid: "d2fe6f206258023a06ba281d4a217500",
            })
            .update({
              data: {
                articleData: _.pop([this.properties.docId]),
              },
            });
          this.pop()
        } else {
          db.collection("collects")
            .where({
              uid: "d2fe6f206258023a06ba281d4a217500",
            })
            .update({
              data: {
                articleData: _.unshift([this.properties.docId]),
              },

            });
            this.add()
        }
        this.setData({
          collectNum: parseInt(this.data.collectNum) + num,
          isShow: !this.data.isShow,
        });
      }
    }, 600),
    add(){
      var collects=wx.getStorageSync('collects')||[]
      var a=[this.properties.docId]
      wx.setStorageSync('collects',a.concat(collects))
    },
    pop(){
      var collects=wx.getStorageSync('collects')||[]
      var index =collects.indexOf(this.properties.docId)
      let arrays = []
      for (var i = 0; i< collects.length; i++) {
        if (i != index) {
          arrays.push(collects[i])
        }
      }
      wx.setStorageSync('collects', arrays)
    }
  },
});
