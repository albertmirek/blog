import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Heading } from "./index";
import React from "react";

describe("Heading component testing", () => {
  it("renders h1", () => {
    render(
      <Heading headingLevelStyle={1} headingLevel={1}>
        Hello, 1
      </Heading>,
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Hello, 1");
    expect(heading.tagName).toBe("H1");
  });

  it("renders h4", () => {
    render(
      <Heading headingLevelStyle={1} headingLevel={4}>
        Hello, 4
      </Heading>,
    );
    const heading = screen.getByRole("heading", { level: 4 });
    expect(heading).toHaveTextContent("Hello, 4");
    expect(heading.tagName).toBe("H4");
  });
});
