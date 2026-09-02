import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Projects from "../sections/Projects/Projects";

describe("Projects section filtering", () => {
  it("shows all projects by default", () => {
    render(<Projects />);
    const grid = document.querySelector(".project-grid");
    expect(within(grid).getByText("ServiceFlow")).toBeInTheDocument();
    expect(within(grid).getByText("CyberWatch")).toBeInTheDocument();
    expect(within(grid).getByText("FlowTask Pro")).toBeInTheDocument();
    expect(within(grid).getByText("Cisco Packet Tracer Network Labs")).toBeInTheDocument();
  });

  it("filters to only Cybersecurity-category projects", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const filterGroup = screen.getByRole("group", { name: /filter projects/i });
    await user.click(within(filterGroup).getByText("Cybersecurity"));

    const grid = document.querySelector(".project-grid");
    expect(within(grid).getByText("CyberWatch")).toBeInTheDocument();
    expect(within(grid).queryByText("ServiceFlow")).not.toBeInTheDocument();
    expect(within(grid).queryByText("FlowTask Pro")).not.toBeInTheDocument();
  });

  it("filters to only Networking-category projects", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const filterGroup = screen.getByRole("group", { name: /filter projects/i });
    await user.click(within(filterGroup).getByText("Networking"));

    const grid = document.querySelector(".project-grid");
    expect(within(grid).getByText("Cisco Packet Tracer Network Labs")).toBeInTheDocument();
    expect(within(grid).queryByText("ServiceFlow")).not.toBeInTheDocument();
  });
});
