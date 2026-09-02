import "@testing-library/jest-dom/vitest";

// jsdom does not implement IntersectionObserver; useActiveSection relies on
// it purely for nav highlighting, which isn't under test, so a minimal stub
// is sufficient here.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (typeof window !== "undefined" && !window.IntersectionObserver) {
  window.IntersectionObserver = IntersectionObserverStub;
  globalThis.IntersectionObserver = IntersectionObserverStub;
}
