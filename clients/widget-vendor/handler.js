// VENDOR ROLE: Responsible for creating and submitting new packages to the system

const Chance = require("chance");
const chance = new Chance();

function widgetHandler(payload) {
  return {
    store: '532d60',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
}

module.exports = widgetHandler;