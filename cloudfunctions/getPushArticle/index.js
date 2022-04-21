const cloud = require("wx-server-sdk");
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});
var db = cloud.database();
var $ = db.command.aggregate;
exports.main = async (event, context) => {
  return db
    .collection("article")
    .aggregate()
    .sample({
      size: 6
    })
    .lookup({
      from: "user",
      localField: "from",
      foreignField: "_id",
      as: "userInfo",
    })
    .replaceRoot({
      newRoot: $.mergeObjects([$.arrayElemAt(["$userInfo", 0]), "$$ROOT"]),
    })
    .addFields({
      coverUrl: $.arrayElemAt(['$imgList', 0])
    })
    .project({
      imgList:0,
      userInfo: 0,
      content: 0,
      collectNum: 0,
      from: 0,
      time: 0,
    })
    .end({
      success: function (res) {
        return res;
      },
      fail(error) {
        return error;
      },
    });
};
