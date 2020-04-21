const formatTime = (date) => {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


/**
 * 获取云数据库数据
 * @param  {[type]} collection [description]
 * @return {[type]}            [description]
 */
const fetchDatabase = (collection, params) => {
  const db = wx.cloud.database()
  return new Promise((resolve, reject) => {
    db.collection(collection).where({
      ...params
    }).get({
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}


/**
 * 获取云数据库数据工具方法，异常捕获
 * @param  {[type]} collection [description]
 * @return {[type]}            [description]
 */
const getDataByType = (collection, params) => {
  return fetchDatabase(collection, params)
    .then(data => [null, data])
    .catch(err => [err, null])
}


/**
 * 提示错误信息
 * @param  {[type]} info [description]
 * @return {[type]}      [description]
 */
const showErrorInfo = (info) => {
  wx.showToast({
    title: info,
  })
}


module.exports = {
  formatTime,
  getDataByType,
  showErrorInfo
}
