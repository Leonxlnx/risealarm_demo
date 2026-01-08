## 2026-01-08 - Lazy Loading Named Exports
**Learning:** React.lazy expects a default export. To lazy load named exports, you must use an intermediate promise that returns an object with a default property pointing to the named export: `.then(module => ({ default: module.NamedExport }))`.
**Action:** Use this pattern whenever lazy loading components that are not default exported.
