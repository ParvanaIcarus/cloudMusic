import { request } from './request.js'

// 首頁輪播圖
export const reqIndexBanner = () =>
  request({
    url: '/banner',
    type: '2',
  })

// 推薦歌單  /personalized
export const reqRecSongList = () =>
  request({
    url: '/personalized',
    data: {
      limit: 10,
    },
  })

// 排行榜
export const reqTopList = (idx) =>
  request({
    url: '/top/list',
    data: {
      idx,
    },
  })

// 手機號登錄
export const reqLogin = (phone, password) =>
  request({
    url: '/login/cellphone',
    data: { phone, password },
  })

// 獲取視屏標籤列表 /video/group/list
export const reqGroupList = () =>
  request({
    url: '/video/group/list',
  })

// 獲取視頻標籤對應ID的視頻 /video/group
export const reqGroupVideo = (id) =>
  request({
    url: '/video/group',
    data: {
      id,
    },
  })
