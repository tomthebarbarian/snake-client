// Snake Game Implementation over TCP and HTTP //
// Connecting to the Server //
const { on } = require("events");
const net = require("net");

// Input from keyboard
const stdin = process.stdin;
// stdin.setRawMode(true);

const connect = require('./client');
// establishes a connection with the game server
const conn = connect();


stdin.on('data', (key) => {
  if (key === '\u0003') {
    conn.write('ctrl-c end connection');
    console.log('Ended Connection');
    conn.end();
  }
  conn.write('Tom"s: ' + key);
});
