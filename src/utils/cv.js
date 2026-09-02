import { profile } from "../data/profile";

// Files placed directly in /public are served at the deployed base URL.
// import.meta.env.BASE_URL resolves to "/portfolio/" in production and
// "/" in development, so this works on GitHub Pages without hard-coding
// the repository name here.
export function getCvUrl() {
  return `${import.meta.env.BASE_URL}${profile.cvFileName}`;
}

/**
 * Returns the CV href only when a real CV file has been supplied.
 * Toggle `profile.cvAvailable` to `true` once
 * /public/<profile.cvFileName> exists — no other code changes needed.
 */
export function getCvHref() {
  return profile.cvAvailable ? getCvUrl() : null;
}
