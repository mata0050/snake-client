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
  return conn;
};

console.log('Connecting ...');
connect();

// start an instance of a tcp server
// const server = net.createServer();
