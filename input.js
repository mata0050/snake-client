const { KEY_PRESSES } = require('./constants');

let connection;
const setupInput = function (conn) {
  // Stores the active TCP connection object.
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  let lastKeyPressed = 'w';
  conn.on('connect', () => {
    setInterval(() => {
      connection.write(KEY_PRESSES[lastKeyPressed]);
    }, 100);
  });

  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  const handleUserInput = (key) => {
    // console.log(key);
    if (key === '\u0003') {
      process.exit();
    }
    if (KEY_PRESSES[key]) {
      if (
        !(
          (key === 'w' && lastKeyPressed === 's') ||
          (lastKeyPressed === 'w' && key === 's') ||
          (key === 'a' && lastKeyPressed === 'd') ||
          (lastKeyPressed === 'd' && key === 'a') ||
          key === lastKeyPressed
        )
      ) {
        lastKeyPressed = key;
        connection.write(KEY_PRESSES[key]);
      }
    }
    return key;
  };
  return stdin;
};

module.exports = { setupInput };
