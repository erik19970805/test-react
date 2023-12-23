import { Loading } from "@/components/loading";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("Loading", () => {
  test("should be loading", () => {
    render(<Loading />);
    const loading = screen.getByRole("status");
    expect(loading).toBeDefined();

    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeDefined();

    const loadingSpinner = loading.querySelector("svg");
    expect(loadingSpinner).toBeDefined();
  });
});
