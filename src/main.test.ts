import { greeting } from "./main.js";

describe("main module", () => {
  test("return greeting message", () => {
    expect(greeting()).toBe("Hello, world!");
  });
});
