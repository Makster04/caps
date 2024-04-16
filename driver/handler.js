function transit(events, payload) {
    events.emit("inTransit", payload); // Driver package pickup alert: emits "inTransit" event
    console.log("DRIVER", "picked up", payload.orderID);
  }
  
  function delivered(events, payload) {
    events.emit("delivered", payload); // Driver package delivery alert: emits "delivered" event
    console.log("DRIVER", "delivered", payload.orderID);
  }
  
  module.exports = { transit, delivered };
  