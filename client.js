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
    conn.write('Move: up');
  });

  conn.on('connect', (socket) => {
    console.log('Successfully connected to game server');
  });

  // write name on snake
  conn.write('Name: MTM');

  // Move: up
  return conn;
};

module.exports = connect;
