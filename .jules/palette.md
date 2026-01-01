## 2025-12-26 - Icon-Only Buttons
**Learning:** Icon-only buttons (like Trash, Minus, Plus) are invisible to screen readers without labels.
**Action:** Always add explicit `aria-label` to buttons that rely solely on iconography.

## 2025-05-22 - Lazy Loading Mockups
**Learning:** High-resolution device mockups in `PhoneMockup` can cause layout shifts or empty frames during tests if not handled carefully, though `loading="lazy"` improves initial LCP for the rest of the page.
**Action:** When testing pages with heavy media, target interactive elements (buttons/inputs) rather than waiting for decorative images to fully load.

## 2025-10-27 - Accordion Semantics
**Learning:** Using `div` with `onClick` for accordions fails accessibility requirements. The standard pattern is a `<button>` trigger with `aria-expanded` and `aria-controls`.
**Action:** Always wrap interactive summary/header elements in a `<button type="button">` and use `React.useId()` for linking content regions.
