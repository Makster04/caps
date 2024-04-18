// VENDOR ROLE: Responsible for listening to delivery notifications and submitting new packages

const widgetHandler = require("./handler.js");

const io = require('socket.io-client');

let socket = io.connect('http://localhost:3000/caps');

socket.emit('join', { 
  store: '532d60', 
  clientId: 'widgetvendor' 
});

socket.on('join', console.log);

function makePayload() {
  let payload = newPackage();
  socket.emit("pickup", payload); // Vendor package pickup alert: emits "pickup" event
}

function delivered() {
  socket.on("delivered", () => {
    console.log("WIDGET VENDOR", "Thank you for the delivery!"); // Vendor package delivery notification
  });
}

delivered();
makePayload();

