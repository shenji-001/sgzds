const APPID = '4f74b5716ed346c597e476932b878962'

if (APPID === '') {
  wx.showToast({
    title: `请在config.js中提供正确的appid`,
    icon: 'none',
    duration: 5000
  })
}

module.exports = {
  APPID: APPID
}
