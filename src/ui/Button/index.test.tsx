/**
 * @jest-environment node
 */
import { expect, test } from "@jest/globals";
import { renderToString } from "react-dom/server";
import { Button } from "@/ui/Button/index";

test("render button", async () => {
  const jsx = await Button({
    color: "primary",
    children: <span>Testing button</span>,
  });
  const html = renderToString(jsx);

  expect(html).toContain("Testing button");
});
