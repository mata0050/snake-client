const net = require('net');
const { IP, PORT } = require('./constants');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data);
    conn.write('Move: right');
  });

  conn.on('connect', () => {
    console.log('Successfully Connected!');
    conn.write('Name: 4G');
    // conn.write("Move: up");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);
  });
  return conn;
};

module.exports = { connect };
