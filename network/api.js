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
