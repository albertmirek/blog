/**
 * @jest-environment node
 */
import { Header } from "@/ui/Header/index";
import { expect, test } from "@jest/globals";
import { renderToString } from "react-dom/server";

test("render header", async () => {
  const jsx = await Header({});
  const html = renderToString(jsx);

  expect(html).toContain("Recent articles");
  expect(html).toContain("About");
});
