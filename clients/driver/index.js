const events = require("../eventPool.js");
const handler = require("./handler.js");

function pickedUP() {
  events.on("pickup", (payload) => handler.transit(events, payload)); // Driver package pickup notification
}

function droppingOff() {
  events.on("inTransit", (payload) => handler.delivered(events, payload)); // Driver package delivery notification
}

module.exports = { pickedUP, droppingOff };
