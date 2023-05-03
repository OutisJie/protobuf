import axios from 'axios'
import { bilibili } from "@pb/protos"
import { Writer } from 'protobufjs'

const httpService = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000, // 我们内网 nginx 的超时设置就是 10s
  method: 'post',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/octet-stream', // 我们传输的是 proto encode 过的二进制数据
  },
  responseType: 'arraybuffer', // 接受到的也是后端用 proto encode 过的二进制数据
})

function request<T>(
  params: T,
  reqClazz: { encode: (message: T) => Writer },
  resClazz: { decode(v: Uint8Array): any } // 用 any 投个懒
) {
  return httpService
    .post('api', params, {
      transformRequest: (v) => {
        const ab = reqClazz.encode({ ...v }).finish()
        return ab
      },
      transformResponse: (v) => {
        const buf = new Uint8Array(v)
        return resClazz.decode(buf)
      },
    })
    .then(
      (res) => {
        console.log(res)
      },
      (err) => {
        throw err
      }
    )
}

export { request }
