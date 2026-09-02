import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

function renderAt(initialPath) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("route resolution", () => {
  it("renders the home page content at the root route", () => {
    renderAt("/");
    expect(screen.getAllByText("Mohammed Walid Ibrahim El-Henawi").length).toBeGreaterThan(0);
  });

  it("falls back to the 404 page for an unknown route", () => {
    renderAt("/this-project-does-not-exist");
    expect(screen.getByText("Page not found")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to home/i })).toBeInTheDocument();
  });
});
