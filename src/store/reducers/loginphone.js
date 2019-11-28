import { handleActions } from 'redux-actions'
import { ASYNC_LOGINPHONE, SAVE_PHONE } from '../types'

export default handleActions({
  [SAVE_PHONE] (state, action) {
    return {
      token: state.token,
      phone: action.payload
    }
  },
  [ASYNC_LOGINPHONE] (state, action) {
    return {
      token: action.payload.token,
      phone: state.phone
    }
  }
}, {
  token: '',
  phone: ''
})
