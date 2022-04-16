const cloud = require("wx-server-sdk");
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});
var db = cloud.database();
var $ = db.command.aggregate;
exports.main = async (event, context) => {
  return db
    .collection("comments")
    .aggregate()
    .match({
      course: event.course,
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
    .lookup({
      from: 'replies',
      localField: '_id',
      foreignField: 'reply',
      as: 'children',
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
