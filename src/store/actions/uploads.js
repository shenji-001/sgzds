import { ASYNC_UPLOADS, ASYNC_UPLOADS_URL } from '../types'
import {BASE_URL} from '../../config'
import wepy from 'wepy'
import { createAction } from 'redux-actions'
let BASE_URL1 = BASE_URL
export const asyncUploads = createAction(ASYNC_UPLOADS, (caseid, data) => {
  console.log(data)
  console.log(caseid)
  debugger
  return new Promise((resolve, reject) => {
    let url = BASE_URL1 + ASYNC_UPLOADS_URL + caseid
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
