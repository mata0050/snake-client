const net = require('net');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.142',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // getting data from server
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', (socket) => {
    console.log('Successfully connected to game server');
  });

  conn.write('Name: MTM');
  return conn;
};

module.exports = connect;
