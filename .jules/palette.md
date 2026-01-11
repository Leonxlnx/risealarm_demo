## 2025-12-26 - Icon-Only Buttons
**Learning:** Icon-only buttons (like Trash, Minus, Plus) are invisible to screen readers without labels.
**Action:** Always add explicit `aria-label` to buttons that rely solely on iconography.

## 2025-05-22 - Lazy Loading Mockups
**Learning:** High-resolution device mockups in `PhoneMockup` can cause layout shifts or empty frames during tests if not handled carefully, though `loading="lazy"` improves initial LCP for the rest of the page.
**Action:** When testing pages with heavy media, target interactive elements (buttons/inputs) rather than waiting for decorative images to fully load.

## 2025-05-23 - Interactive Divs vs Buttons
**Learning:** Interactive elements implemented as `div` with `onClick` (like Accordion headers) are inaccessible to keyboard users and screen readers.
**Action:** Refactor interactive `div`s to `<button>` elements with `type="button"`, and add `aria-expanded` and `aria-controls` for improved semantics and accessibility.
