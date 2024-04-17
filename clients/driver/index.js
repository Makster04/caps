const handler = require("./handler.js");
const io = require('socket.io-client');

let socket = io.connect('http://localhost:3000/caps');

socket.emit('join', { 
  store: '401d59', 
  clientId: 'driver'
});

socket.on('join', console.log);

function pickedUP() {
  socket.on("pickup", (payload) => handler.transit(events, payload)); // Driver package pickup notification
}

function droppingOff() {
  socket.on("inTransit", (payload) => handler.delivered(events, payload)); // Driver package delivery notification
}

pickedUP();
droppingOff();
// module.exports = { pickedUP, droppingOff };
