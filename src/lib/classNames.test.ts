import { expect, test } from "@jest/globals";
import { classNames } from "@/lib/classNames";

test("classNames", () => {
  const s1 = "test";
  const s2 = "test2";

  expect(classNames(s1, s2)).toBe("test test2");
});
