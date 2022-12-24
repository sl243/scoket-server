const express = require('express')
const app = express()
const port = 5000

const http = require('http')

const server = http.createServer(app)


app.listen(port, () => {
  console.log(`Scoket server on port ${port}`)
})