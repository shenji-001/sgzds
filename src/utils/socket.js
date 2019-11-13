// import IO from 'weapp.socket.io'
import IO from '../lib/io'
import { ASYNC_SOCKETIO_URL } from '../store/types'

let wsStatus = false
let onSocket = null

export const connect = function (token, cb) {
  if (!onSocket) {
    let url = '?token=' + token
    onSocket = IO(ASYNC_SOCKETIO_URL + url) // socket的地址
    onSocket.on('connect', function (res) {
      cb(true, onSocket)
      wsStatus = true
    })
    setTimeout(function () { // 超时
      if (!wsStatus) {
        cb(false, onSocket)
      }
    }, 10000)
  } else {
    cb(true, onSocket)
  }
}
