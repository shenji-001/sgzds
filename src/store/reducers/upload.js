import { handleActions } from 'redux-actions'
import { ASYNC_UPLOAD } from '../types'

export default handleActions({
  [ASYNC_UPLOAD] (state, action) {
    return Object.assign({}, ...state, {
      upload: action.payload
    })
  }
}, {
  upload: ''
})
