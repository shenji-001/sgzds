import { ASYNC_SERVERINFO, ASYNC_SERVERINFO_URL } from '../types'
import {BASE_URL} from '../../config'
import wepy from 'wepy'
import { createAction } from 'redux-actions'
let BASE_URL1 = BASE_URL
export const asyncServerInfo = createAction(ASYNC_SERVERINFO, (registno) => {
  return new Promise((resolve, reject) => {
    try {
      wepy.request({
        url: BASE_URL1 + ASYNC_SERVERINFO_URL,
        data: {},
        method: 'get',
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
