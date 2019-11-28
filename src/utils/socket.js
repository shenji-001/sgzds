import IO from 'weapp.socket.io'
// import IO from '../lib/io'
import { ASYNC_SOCKETIO_URL } from '../store/types'

let wsStatus = false
let onSocket = null

export const connect = function (token) {
  return new Promise((reslove, reject) => {
    if (!onSocket) {
      let url = '?token=' + token
      onSocket = IO(ASYNC_SOCKETIO_URL + url) // socket的地址
      onSocket.on('connect', function () {
        let data = {
          status: true,
          wx: onSocket
        }
        reslove(data)
        wsStatus = true
      })
        setTimeout(function () { // 超时
          if (!wsStatus) {
            let data = {
              status: false,
              wx: onSocket
            }
            reslove(data)
          }
        }, 10000)
      } else {
        let data = {
          status: true,
          wx: onSocket
        }
        reslove(data)
      }
  })
}
export const disconnect = function() {
  onSocket = null
}
