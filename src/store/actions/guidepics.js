import { ASYNC_GUIDEPICS, ASYNC_GUIDEPICS_URL } from '../types'
import {BASE_URL} from '../../config'
import wepy from 'wepy'
import { createAction } from 'redux-actions'
let BASE_URL1 = BASE_URL
export const asyncGetGuides = createAction(ASYNC_GUIDEPICS, (val) => {
  return new Promise((resolve, reject) => {
    let url = BASE_URL1 + ASYNC_GUIDEPICS_URL
    if (val) {
      url += `${val}`
    }
    try {
      wepy.request({
        url: url,
        data: {},
        method: 'get',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          resolve(res)
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
