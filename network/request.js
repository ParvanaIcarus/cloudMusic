const BASEURL = 'http://localhost:3000'
export const request = ({ url, data = {}, method = 'get' }) => {
  return new Promise((reslove, reject) => {
    wx.request({
      url: BASEURL + url,
      data,
      method,
      success(res) {
        reslove(res.data)
      },
      fail(err) {
        reject(err)
      },
    })
  })
}
