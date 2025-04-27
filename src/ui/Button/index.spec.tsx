import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./index";
import React from "react";

describe("Button component testing", () => {
  it("renders button", () => {
    render(
      <Button color={"primary"} type={"submit"}>
        My Button
      </Button>,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("My Button");
    expect(button.tagName).toBe("BUTTON");
  });
});
