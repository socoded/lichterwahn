PORT = 33333
HOST = process.env.SERVER || 'lights.socoded.com'

dgram = require('dgram')

client = dgram.createSocket('udp4')

module.exports = function(i,r,g,b) {
  message = new Buffer([i,r,g,b].join(','))
  client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) {
      throw err
    }
  })
}
