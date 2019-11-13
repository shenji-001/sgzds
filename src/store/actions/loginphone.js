import { ASYNC_LOGINPHONE, ASYNC_LOGINPHONE_URL } from '../types'
import {BASE_URL} from '../../config'
import wepy from 'wepy'
import { createAction } from 'redux-actions'
let BASE_URL1 = BASE_URL
export const asyncloginphone = createAction(ASYNC_LOGINPHONE, (mobilephone) => {
  try {
    return new Promise((resolve, reject) => {
      try {
        wepy.request({
          url: BASE_URL1 + ASYNC_LOGINPHONE_URL,
          data: {
            mobilephone: mobilephone
          },
          method: 'post',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            console.log(res)
            try {
              if (res.data) {
                resolve(res.data)
              }
            } catch (e) {
              reject(res)
            }
          },
          fail(res) {
            reject(res)
          }
        })
      } catch (e) {
        reject(e)
      }
    })
  } catch (e) {
    return e
  }
})
