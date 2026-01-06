# BOLT'S JOURNAL - PERFORMANCE LEARNINGS

## 2024-05-22 - Shared IntersectionObserver Pattern
**Learning:** Creating a new `IntersectionObserver` instance for every individual reveal/animation component causes significant memory and CPU overhead, especially on long pages with many animated elements.
**Action:** Implement a Singleton "Shared Observer" pattern. Use a single `IntersectionObserver` instance and a `WeakMap` to map observed DOM elements to their specific state-setting callbacks. This reduces complexity from O(N) observers to O(1).
