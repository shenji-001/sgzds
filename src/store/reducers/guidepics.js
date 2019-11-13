import { handleActions } from 'redux-actions'
import { ASYNC_GUIDEPICS } from '../types'

export default handleActions({
  [ASYNC_GUIDEPICS] (state, action) {
    return Object.assign({}, ...state, {
      guidepics: action.payload
    })
  }
}, {
  guidepics: ''
})
