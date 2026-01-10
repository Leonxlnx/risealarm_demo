## 2026-01-10 - Shared IntersectionObserver Pattern
**Learning:** Instantiating a new `IntersectionObserver` for every animated element (like `Reveal` components) creates significant memory and CPU overhead, especially on pages with long lists or many sections.
**Action:** Use a Singleton pattern with a `WeakMap` to manage callbacks. This allows a single observer to handle all elements, reducing overhead to O(1) observer instance while maintaining O(N) observations.

## 2026-01-10 - Playwright Timeout on Dev Server
**Learning:** The default Playwright timeout (10s) and `load` wait state can be flaky against the local Vite dev server in this environment.
**Action:** Use `wait_until='domcontentloaded'` and increase timeout to 30s when verifying against localhost to ensure stability.
