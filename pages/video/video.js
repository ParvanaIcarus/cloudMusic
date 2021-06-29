import { reqGroupList, reqGroupVideo } from '../../network/api.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    groupList: [],
    groupId: 0,
    groupVideo: [],
    playVideoId: -1,
  },
  //videoPlay 播放視頻
  videoPlay(e) {
    const { id: playVideoId } = e.currentTarget.dataset
    this.setData({
      playVideoId,
    })
  },
  // NavItemTap
  async NavItemTap(e) {
    const { id } = e.currentTarget.dataset
    this.setData({
      groupVideo: [],
      groupId: id,
    })
    this.getGroupVideo()
  },
  // 獲取視頻標籤列表
  async getGroupList() {
    const { data } = await reqGroupList()
    this.setData(
      {
        groupList: data.slice(0, 10),
        groupId: data[0].id,
      },
      (_) => {
        this.getGroupVideo()
      },
    )
  },
  // 獲取相對應的視頻列表
  async getGroupVideo() {
    const { datas } = await reqGroupVideo(this.data.groupId)
    datas.forEach((item, index) => {
      item.id = index
    })
    this.setData({
      groupVideo: datas,
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
  onShow: function () {
    this.getGroupList()
  },

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
