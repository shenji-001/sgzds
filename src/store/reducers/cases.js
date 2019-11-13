import { handleActions } from 'redux-actions'
import { ASYNC_CASES } from '../types'

export default handleActions({
  [ASYNC_CASES] (state, action) {
    return Object.assign({}, ...state, {
      session: action.payload
    })
  }
}, {
  session: ''
})
