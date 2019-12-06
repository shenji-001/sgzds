import { handleActions } from 'redux-actions'
import { ASYNC_RTCURL } from '../types'

export default handleActions({
  [ASYNC_RTCURL] (state, action) {
    return Object.assign({}, ...state, {
      rtc: action.payload
    })
  }
}, {
  rtc: ''
})
