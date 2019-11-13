import { handleActions } from 'redux-actions'
import { ASYNC_UPLOADS } from '../types'

export default handleActions({
  [ASYNC_UPLOADS] (state, action) {
    return Object.assign({}, ...state, {
      upload: action.payload
    })
  }
}, {
  upload: ''
})
