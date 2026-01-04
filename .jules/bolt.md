# Bolt's Journal

## 2024-05-22 - [Lazy Loading Below the Fold]
**Learning:** Heavy sections below the fold (Problem, Comparison, HomePricing, Testimonials) should be lazy loaded to improve initial load time (LCP/TBT).
**Action:** Use `React.lazy` and `Suspense` for heavy components that are not in the initial viewport.
