import { handleActions } from 'redux-actions'
import { ASYNC_SESSIONIN, SAVE_SOCKETIO } from '../types'


export default handleActions({
  [ASYNC_SESSIONIN] (state, action) {
    return {
      soket: state.soket,
      session: action.payload
    }
  },
  [SAVE_SOCKETIO] (state, action) {
    return Object.assign({}, ...state, {
      soket: action.payload
    })
  }
}, {
  session: '',
  soket: ''
})
