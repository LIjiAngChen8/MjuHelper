/**
 * LIjiANgChen
 * 获取日期函数集
 */
function LJCgetweek(){
  var time = new Date();//获得日期
  let year = time.getFullYear() //年
  let month = time.getMonth() + 1 //月-整数值0（1月）到11（12月）故需要加1。
  let day = time.getDate() //日
  let hour = time.getHours() //时
  let minute = time.getMinutes() //分
  let second = time.getSeconds() //秒
  let Mday= new Date(year, month, 0).getDate()
}
//暴露出去
module.exports = {
  LJCgetweek: LJCgetweek,
};