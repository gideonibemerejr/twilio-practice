require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    to: process.env.MY_PHONE_NUMBER,
    from: '+15205978943',
    body: 'This is the ship that did a thing?'
  })
  .then(message => console.log(message.sid))
