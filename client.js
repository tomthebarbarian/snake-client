const net = require("net");
const connect = function() {
  // connect to server for Snake
  console.log("Connecting ...");
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

  // stdin.on('data', (key) => {
  //   if (key === '\u0003') {
  //     conn.write('ctrl-c end connection');
  //     conn.end();
  //   }
  //   conn.write('Tom"s: ' + key);
  // });

  return conn;
};



module.exports = connect;