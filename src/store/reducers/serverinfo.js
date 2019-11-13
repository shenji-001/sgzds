import { handleActions } from 'redux-actions'
import { ASYNC_SERVERINFO } from '../types'

export default handleActions({
  [ASYNC_SERVERINFO] (state, action) {
    return Object.assign({}, ...state, {
      serverinfo: action.payload
    })
  }
}, {
  serverinfo: ''
})
