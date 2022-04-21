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
      size: 2
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
    .project({
      userInfo: 0,
    })
    .end({
      success: function (res) {
        return res.list;
      },
      fail(error) {
        return 'error';
      },
    });
};
