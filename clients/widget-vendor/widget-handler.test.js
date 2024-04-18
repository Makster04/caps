const widgetHandler = require("./handler.js");

describe("widget handler", () => {
  it("should return a payload", () => {
    let sample = {};
    const payload = widgetHandler(sample);

    expect(payload.address).toBeTruthy();
    expect(payload.bananaphone).toBeFalsy();
  });
});