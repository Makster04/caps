// Central event pool for handling system-wide events

const events = require("events");

const eventPool = new events();

module.exports = eventPool;

