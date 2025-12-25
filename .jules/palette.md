## 2024-05-24 - Missing ARIA Labels on Interactive Elements
**Learning:** Found critical navigation elements (Mobile Menu Toggle, Cart Link) completely lacking accessible names. The Mobile Menu button was icon-only with no `aria-label`, making it invisible to screen reader users. The Cart link relied on visual cues (icon + badge) but had no text content for empty states.
**Action:** Always verify icon-only buttons have `aria-label`. For toggles, ensure `aria-expanded` and state-aware labels are used.
