"use strict";

import { sum } from "./sample_problem.mjs";

// This is a smoke test / hello world for jest
describe("Smoke test", () => {
  test("1 + 2 = 3", () => {
    expect(1 + 2).toEqual(3);
  });
});

// Test sum
describe("sum", () => {
  test("adds two integers", () => {
    expect(sum(1, 1)).toEqual(2);
  });
  test("adds negative integers", () => {
    expect(sum(-1, -1)).toEqual(-2);
  });
  test("does not concatenate strings", () => {
    expect(sum("1", "1")).not.toEqual("11");
  });
});
