import { combineReducers } from 'redux'
import counter from './counter'
import login from './login'
import loginPhone from './loginphone'
import sessionIn from './sessionin'
import elecevi from './elecevi'
import cases from './cases'
import serverinfo from './serverinfo'
import upload from './upload'
import uploads from './uploads'
import guidepics from './guidepics'

export default combineReducers({
  counter,
  login,
  loginPhone,
  sessionIn,
  elecevi,
  cases,
  serverinfo,
  uploads,
  guidepics,
  upload
})
