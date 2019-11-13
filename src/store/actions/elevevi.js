import { ASYNC_CASELIST, ASYNC_CASELIST_URL } from '../types'
import {BASE_URL} from '../../config'
import wepy from 'wepy'
import { createAction } from 'redux-actions'
let BASE_URL1 = BASE_URL
export const asyncElevevi = createAction(ASYNC_CASELIST, (val) => {
  return new Promise((resolve, reject) => {
    let url = BASE_URL1 + ASYNC_CASELIST_URL
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
