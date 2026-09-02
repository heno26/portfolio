import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/layout/Navbar";

describe("Navbar", () => {
  it("renders all primary navigation links", () => {
    render(<Navbar />);
    ["Home", "About", "Skills", "Projects", "Labs", "Education", "Contact"].forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it("opens and closes the mobile menu accessibly", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(screen.getByRole("button", { name: /close menu/i })).toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByRole("button", { name: /close menu/i }));
    expect(screen.getByRole("button", { name: /open menu/i })).toHaveAttribute("aria-expanded", "false");
  });

  it("disables the Download CV action when no CV file has been supplied", () => {
    render(<Navbar />);
    const cvButtons = screen.getAllByText("Download CV");
    expect(cvButtons[0].closest("[data-disabled='true']")).toBeTruthy();
  });
});
