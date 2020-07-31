const http = require('http')
const path = require('path')
const express = require('express')

const db = require('./db')

const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'OPTIONS GET')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.static(path.join(path.dirname(__dirname), '/build')))

app.get('/applicants', (req, res) => {
  let data = db
  const { search } = req.query
  if (search) {
    data = db.filter((applicant) => {
      return (
        applicant.name.toLocaleLowerCase().includes(search.toLowerCase()) ||
        applicant.email.split('@')[0].toLocaleLowerCase().includes(search.toLowerCase())
      )
    })
  }

  const timeout = Math.floor(Math.random() * 5000)

  return setTimeout(() => res.status(200).send(data), timeout)
})

app.get('/', function (req, res) {
  res.sendFile(path.join(path.dirname(__dirname), 'build', 'index.html'))
})

app.use((err, req, res, next) => {
  console.log(err.stack)
  return res.status(500).send({
    message: 'Something went wrong. Internal server error',
  })
})

const PORT = parseInt(process.env.PORT, 10) || 4000

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`server running on port: ${PORT}\n`)
})
