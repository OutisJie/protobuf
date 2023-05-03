import 'dotenv/config'
import express, { Router } from 'express'
import cors from 'cors'
import { bilibili } from '@pb/protos'
import BufferHelper from 'bufferhelper'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server')
})

const router = Router()

router.post('/api', (req: any, res: any) => {
  let bufferHelper = new BufferHelper()
  req.on('data', function (chunk: any) {
    bufferHelper.concat(chunk)
  })
  req.on('end', function () {
    let buffer = bufferHelper.toBuffer();

    console.log(buffer) // 这里已经就是二进制文件了
    
    // const buff = new Uint8Array(req.data)
    const parsedReq = bilibili.Request.decode(buffer)
    console.log('encode', parsedReq)
  
    const encodedRes = bilibili.Response.encode({
      data: [{ id: 'test' }],
      status: 111111,
    }).finish()
  
    res.set('Content-Type', 'application/octet-stream')
    res.send(encodedRes)
  })

})

app.use(router)

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`)
})
