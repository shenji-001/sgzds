import { ASYNC_RTCURL, ASYNC_RTCURL_URL } from '../types'
import {BASE_URL} from '../../config'
import wepy from 'wepy'
import { createAction } from 'redux-actions'
let BASE_URL1 = BASE_URL
export const asyncRTClog = createAction(ASYNC_RTCURL, (data) => {
  return new Promise((resolve, reject) => {
    let url = BASE_URL1 + ASYNC_RTCURL_URL
    try {
      wepy.request({
        url: url,
        data: JSON.stringify(data),
        method: 'post',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          resolve(res.data)
        },
        fail(res) {
          resolve(res)
        }
      })
    } catch (e) {
      reject(e)
    }
  })
})
