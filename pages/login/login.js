import { reqLogin } from '../../network/api.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    password: '',
    phone: '',
  },
  // 輸入後的值保存
  changeInput(e) {
    const { type } = e.target.dataset
    const { value } = e.detail
    this.setData({
      [type]: value,
    })
  },
  // 登錄發送請求
  async loginBtn() {
    if (
      this.data.password.trim().length == 0 ||
      this.data.phone.trim().length == 0
    ) {
      return wx.showToast({
        title: '請輸入用戶名或密碼',
        icon: 'none',
      })
    }
    // 發送請求
    let { phone, password } = this.data
    const res = await reqLogin(phone, password)
    if (res.code !== 200) {
      return wx.showToast({
        title: '用戶名或者密碼錯誤',
        icon: 'none',
      })
    }
    wx.setStorageSync('userInfo', res.profile)

    wx.showToast({
      title: '登錄成功',
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
