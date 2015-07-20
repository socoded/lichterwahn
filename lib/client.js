PORT = 33333
HOST = process.env.SERVER || 'lights.socoded.com'

dgram = require('dgram')

module.exports = function(target) {
  target ||= 0
  return function(i,r,g,b) {
    client = dgram.createSocket('udp4');
    message = new Buffer([i,r,g,b,target].join(','));
    if (process.env.DEBUG) {
      console.log(message, 0, message.length, PORT, HOST);
    }
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
      if (process.env.DEBUG) {
        console.log('sent', err, bytes);
      }
      if (err) {
        throw err
      }
      client.close();
    });
  }

}
