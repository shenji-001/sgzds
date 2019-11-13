import { handleActions } from 'redux-actions'
import { ASYNC_LOGIN } from '../types'

export default handleActions({
  [ASYNC_LOGIN] (state, action) {
    return Object.assign({}, ...state, {
      token: action.payload
    })
  }
}, {
  token: ''
})
