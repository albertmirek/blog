import { it, expect } from "vitest";

import { classNames } from "./classNames";

it("Should concat two string together", () => {
  const s1 = "test";
  const s2 = "test2";

  expect(classNames(s1, s2)).toBe("test test2");
});
