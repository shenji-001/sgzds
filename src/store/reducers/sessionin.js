import { handleActions } from 'redux-actions'
import { ASYNC_SESSIONIN } from '../types'

export default handleActions({
  [ASYNC_SESSIONIN] (state, action) {
    return Object.assign({}, ...state, {
      session: action.payload
    })
  }
}, {
  session: ''
})
