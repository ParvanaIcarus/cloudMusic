const BASEURL = 'http://localhost:3000'
export const request = ({ url, data = {}, method = 'get' }) => {
  return new Promise((reslove, reject) => {
    wx.request({
      url: BASEURL + url,
      data,
      method,
      header: {
        cookie:
          'MUSIC_U=39625c10d52e61108bda6807fcb60aae3271b233789184dcf605dafa7f5dd0a733a649814e309366; Max-Age=1296000; Expires=Wed 14 Jul 2021 02:05:31 GMT; Path=/;',
      },
      success(res) {
        reslove(res.data)
      },
      fail(err) {
        reject(err)
      },
    })
  })
}
