import _ from 'lodash'

export function uniqId() {
  return Date.now()
}

/**
 *时间格式化函数
 * @param showTime {boolean} 是否显示时间
 * @param timeStamp {number} 时间戳
 * @returns {*}
 */
export function getFormatter(showTime, timeStamp) {
  if (typeof timeStamp !== 'undefined') {
    timeStamp = +timeStamp;
    let date = new Date(timeStamp);

    let year = date.getFullYear();
    let month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1); //js从0开始取
    let date1 = (date.getDate() + 1 < 10) ? '0' + date.getDate() : date.getDate();
    let hour = (date.getHours() + 1 < 10) ? '0' + date.getHours() : date.getHours();
    let minutes = (date.getMinutes() + 1 < 10) ? '0' + date.getMinutes() : date.getMinutes();
    let second = (date.getSeconds() + 1 < 10) ? '0' + date.getSeconds() : date.getSeconds();
    if (showTime) {
      return year + '-' + month + '-' + date1 + ' ' + hour + ':' + minutes + ':' + second;
    } else {
      return year + '-' + month + '-' + date1;
    }
  } else {
    return null;
  }

}
/**
 * 验证编码
 * @param t {string} 字符串
 * @return {boolean}
 */
export function validCode(t) {
  return /^[A-Za-z_ ]+$/.test(t)
}

/**
 * 从asrc中过滤key值一致的amatch对象，返回剩下的
 * @param  {[Array]} asrc   [源对象数组]
 * @param  {[Array]} amatch [目标对象数组]
 * @param  {[String]} key   [匹配key，暂时只支持一个]
 * @return {[Array]}        [过滤后源对象数组剩下的部分]
 */
export function removeMatchs(asrc, amatch, key) {
  let aresult = _.clone(asrc, true);
  _.map(amatch, (match) => {
    _.remove(aresult, (n) => {
      return typeof n[key] !== undefined && n[key] === match[key];
    })
  })
  return aresult;
}

let timeout;

export function delayQuery(fn) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }

  timeout = setTimeout(fn, 500);
}