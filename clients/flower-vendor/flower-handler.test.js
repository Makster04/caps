const flowerHandler = require("./handler.js");

describe("flower handler", () => {
  it("should return a payload", () => {
    let sample = {};
    const payload = flowerHandler(sample);

    expect(payload.address).toBeTruthy();
    expect(payload.bananaphone).toBeFalsy();
  });
});
