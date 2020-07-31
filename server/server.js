const http = require('http')
const path = require('path')
const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const db = require('./db')

const app = express()

app.use(express.static(path.join(path.dirname(__dirname), '/build')))

app.get('/applicants', (req, res, next) => {
  let data = db
  const { search } = req.query
  if (search) {
    data = db.filter((applicant) => {
      return (
        applicant.name.toLocaleLowerCase().includes(search.toLowerCase()) ||
        applicant.email.toLocaleLowerCase().includes(search.toLowerCase())
      )
    })
  }

  const MAX_DELAY = process.env.MAX_DELAY || 5000

  const timeout = Math.floor(Math.random() * MAX_DELAY)

  return setTimeout(() => res.status(200).send(data), timeout)
})

app.get('/', function (req, res) {
  return res.sendFile(path.join(path.dirname(__dirname), 'build', 'index.html'))
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
  console.log(`server running on port: ${PORT}`)
})
