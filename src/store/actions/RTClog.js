import { ASYNC_RTCURL, ASYNC_RTCURL_URL } from '../types'
import {BASE_URL} from '../../config'
import { createAction } from 'redux-actions'
let BASE_URL1 = BASE_URL
export const asyncRTClog = createAction(ASYNC_RTCURL, (registno) => {
  return new Promise((resolve, reject) => {
    try {
      wepy.request({
        url: BASE_URL1 + ASYNC_RTCURL_URL,
        data: {
          registno: registno
        },
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
