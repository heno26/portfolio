import { describe, expect, it } from "vitest";
import { getCvHref, getCvUrl } from "../utils/cv";
import { profile } from "../data/profile";

describe("CV download utility", () => {
  it("returns null when no CV file has been supplied yet", () => {
    expect(profile.cvAvailable).toBe(false);
    expect(getCvHref()).toBeNull();
  });

  it("builds a base-aware URL from the configured filename", () => {
    expect(getCvUrl()).toContain(profile.cvFileName);
  });
});
