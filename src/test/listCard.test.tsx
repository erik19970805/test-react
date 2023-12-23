import { CardList } from "@/components/cardList";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("Card List", async () => {
  render(<CardList />);
  test("should be loading", () => {
    const loading = screen.getByRole("status");
    expect(loading).toBeDefined();
  });

  test("should be render card list after loading", () => {
    const loading = screen.getByRole("status");
    expect(loading).toBeDefined();
    waitFor(() => {
      const cardList = screen.getByRole("list");
      expect(cardList).toBeDefined();

      const cardItem = screen.getByRole("listitem");
      expect(cardItem).toBeDefined();

      const cardItemImg = cardItem.querySelector("img");
      expect(cardItemImg).toBeDefined();

      const cardItemName = cardItem
        .getAttribute("aria-label")
        ?.includes("cardName");
      expect(cardItemName).toBeDefined();

      const cardItemCreatedAt = cardItem.querySelector("strong");
      expect(cardItemCreatedAt).toBeDefined();
      expect(cardItemCreatedAt?.textContent).toEqual("Created At: ");

      const cardItemCreatedAtDate = cardItem
        .getAttribute("aria-label")
        ?.includes("cardCreatedAt");
      expect(cardItemCreatedAtDate).toBeDefined();
    });
  });
});
