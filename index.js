const express = require('express')
const app = express()
require('dotenv').config()


const port =4000

app.get('/',(req, res)=>{
  res.send('Hello world')
})

app.get('/twitter', (req, res)=>{
  res.send('balajiyatheysh')
})

app.get('/login',(req, res)=>{
  res.send('<h1>hahhahhha please login</h1>')
})

app.get('/coffee',(req, res)=>{
  res.send('<h2>Coffee broo</h2>')
})

app.listen(process.env.PORT, ()=>{
  console.log(`first example app listening on pont number ${port}`)
})