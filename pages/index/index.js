import {
  reqIndexBanner,
  reqRecSongList,
  reqTopList,
} from '../../network/api.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 輪播圖列表
    bannnerList: [],
    // 推薦歌曲列表
    RecSongList: [],
    // 排行榜列表
    topList: [],
  },

  // 獲取輪播圖
  async getIndexBannerList() {
    const { banners: bannnerList } = await reqIndexBanner()
    this.setData({ bannnerList: bannnerList.slice(0, 6) })
  },
  // 獲取推薦歌單
  async getRecSongList() {
    const { result: RecSongList } = await reqRecSongList()
    this.setData({ RecSongList })
  },
  // 獲取排行榜列表
  async getTopList(i) {
    const { playlist } = await reqTopList(i)
    let { name, tracks } = playlist
    this.data.topList.push({ name, tracks: tracks.slice(0, 3), id: i })
    this.setData({ topList: this.data.topList })
    console.log(this.data.topList)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndexBannerList()
    this.getRecSongList()
    for (let i = 0; i < 3; i++) {
      this.getTopList(i)
    }
  },

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
