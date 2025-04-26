/**
 * @jest-environment node
 */
import { expect, test } from "@jest/globals";
import { renderToString } from "react-dom/server";
import { ProfileImage } from "@/ui/ProfileImage/index";

test("render button", () => {
  const jsx = ProfileImage({
    height: 24,
    width: 24,
  });
  const html = renderToString(jsx);

  expect(html).toContain("<img");
});
