const http = require('http')
const express = require('express')
const MessagingResponse = require('twilio').twiml.MessagingResponse

const app = express()

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse()

  twiml.message('Im so groovy, I got power')

  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

http.createServer(app).listen(8000, () => {
  console.log('Server running on Port 8000')
})
