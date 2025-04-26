/**
 * @jest-environment node
 */
import { expect, test } from "@jest/globals";
import { renderToString } from "react-dom/server";
import { Heading } from "@/ui/Heading/index";

test("render heading", () => {
  const header1Jsx = Heading({
    children: "headinglevel1",
    headingLevel: 1,
    headingLevelStyle: 1,
  });
  const html = renderToString(header1Jsx);

  expect(html).toContain("<h1");
  expect(html).toContain("headinglevel1");
});
