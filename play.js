// Snake Game Implementation over TCP and HTTP //
// Connecting to the Server //
const { on } = require("events");
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  // connect to server for Snake
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Events listener section
  // when connected to server, do following
  conn.on('connect', ()  => {
    //code that does something when the connection is first established
    console.log('Connection established with server.');

    //pass data to server from here
    //put live commands here

  });
  // catches incoming data from server
  conn.on('data', (data) => {
    //
    console.log(`Recieved data from server: ${data}`);
  });

  // close connection to server
  conn.on('close', () => {
    //
    console.log('Server closed connection');
  });

  return conn;
};

console.log("Connecting ...");
connect();


