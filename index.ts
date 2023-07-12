import express from 'express'
import chatgptRouter from './routes/chatgpt'
const app = express()

// 静态资源
app.use(express.static('public'))
// 使用 express.json() 中间件解析 JSON 数据
app.use(express.json());


app.all('*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'authorization, Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

app.use('', chatgptRouter)
app.use('/api', chatgptRouter)
app.set('trust proxy', 1)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3002, () => globalThis.console.log('Server is running on port 3002'))