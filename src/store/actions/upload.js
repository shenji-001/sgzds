import { ASYNC_UPLOAD, ASYNC_UPLOAD_URL } from '../types'
// import {BASE_URL} from '../../config'
import wepy from 'wepy'
import { createAction } from 'redux-actions'
// let BASE_URL1 = BASE_URL
let BASE_URL1 = 'http://192.168.16.107:3003'
export const asyncUpload = createAction(ASYNC_UPLOAD, (val) => {
  console.log(val)
  debugger
  return new Promise((resolve, reject) => {
    let url = BASE_URL1 + ASYNC_UPLOAD_URL
    try {
      wepy.request({
        url: url,
        formData: val,
        data: val,
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencode' // 默认值
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
