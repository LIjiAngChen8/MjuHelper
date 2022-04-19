const cloud = require("wx-server-sdk");
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});
var db = cloud.database();
const _ = db.command;
exports.main = async (event) => {
  db.collection(event.name)
    .doc(event.doc)
    .update({
      data: {
        likeNum: _.inc(event.num),
      },
    });
};
