import { handleActions } from 'redux-actions'
import { ASYNC_LOGINPHONE, SAVE_TOKEN } from '../types'

export default handleActions({
  [SAVE_TOKEN] (state, action) {
    return Object.assign({}, ...state, {
      token: action.payload
    })
  },
  [ASYNC_LOGINPHONE] (state, action) {
    return Object.assign({}, ...state, {
      token: action.payload
    })
  }
}, {
  token: ''
})
