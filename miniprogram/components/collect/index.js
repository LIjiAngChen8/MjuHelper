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
        }
        this.setData({
          collectNum: this.data.collectNum + num,
          isShow: !this.data.isShow,
        });
      }
    }, 600),
  },
});
