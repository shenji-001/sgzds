import { handleActions } from 'redux-actions'
import { ASYNC_CASELIST } from '../types'

export default handleActions({
  [ASYNC_CASELIST] (state, action) {
    return Object.assign({}, ...state, {
      cases: action.payload
    })
  }
}, {
  cases: ''
})
