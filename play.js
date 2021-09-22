// Snake Game Implementation over TCP and HTTP //
// Connecting to the Server //

// Input from keyboard
const setupInput = require('./input');

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };

const stdin = setupInput();

const connect = require('./client');
// establishes a connection with the game server
const conn = connect();



const controls = (key) => {
// your code here
  console.log(key);
  // if (key === '\u0003') {
  //   conn.write('ctrl-c end connection');
  //   console.log('Ended Connection');
  //   conn.end();
  //   process.exit();
  // }
  if (key === 't') {
    // stdin.setRawMode = (false);
    let msg = 'bowbowbowwwww';
    conn.write(`Say: ${msg}`);
  }
  if (key === 'w') {
    conn.write("Move: up");
  }
  if (key === 'a') {
    conn.write("Move: left");
  }
  if (key === 'd') {
    conn.write("Move: right");
  }
  if (key === 's') {
    conn.write("Move: down");
  }
  if (key === 'i') {
    setTimeout(() => {
      conn.write("Move: up");
    }, 0);
    conn.write("Move: up");
  }
  if (key === 'j') {
    setTimeout(() => {
      conn.write("Move: left");
    }, 0);
    conn.write("Move: left");
  }
  if (key === 'l') {
    setTimeout(() => {
      conn.write("Move: right");
    }, 0);
    conn.write("Move: right");
  }
  if (key === 'k') {
    setTimeout(() => {
      conn.write("Move: down");
    }, 0);
    conn.write("Move: down");
  }
};

stdin.on('data', controls);

// stdin.on('data', (key) => {
//   if (key === '\u0003') {
//     conn.write('ctrl-c end connection');
//     console.log('Ended Connection');
//     conn.end();
//   }
//   conn.write('Tom"s: ' + key);
// });
