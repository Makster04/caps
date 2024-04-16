// VENDOR ROLE: Responsible for listening to delivery notifications and submitting new packages

const newPackage = require("./handler.js");
const events = require("../eventPool.js");

function makePayload() {
  let payload = newPackage();
  events.emit("pickup", payload); // Vendor package pickup alert: emits "pickup" event
}

function delivered() {
  events.on("delivered", () => {
    console.log("VENDOR", "Thank you for the delivery!"); // Vendor package delivery notification
  });
}

module.exports = { makePayload, delivered };

