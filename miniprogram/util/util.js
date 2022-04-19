  /**
   * 节流(throttle)
   * @param fn{function} 函数
   * @param gapTime{Number} 间隔时间
   */
function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
      gapTime = 1500
  }
  let _lastTime = null
  return function () {
      let _nowTime = + new Date()
      if (_nowTime - _lastTime > gapTime || !_lastTime) {
          fn.apply(this, arguments)
          _lastTime = _nowTime
      }
  }
}
module.exports = {
  throttle: throttle,
};