# Bolt's Journal ⚡

## 2024-05-22 - Testing Heavily Animated LCP Components
**Learning:** The `TextReveal` component and other entry animations delay the visibility of text content in the accessibility tree. Standard Playwright assertions like `expect(page.get_by_text(...)).to_be_visible()` fail with timeouts because the text is technically hidden or animating during the initial load phase.
**Action:** When creating verification scripts for animated landing pages, prioritize waiting for structural elements (e.g., `page.wait_for_selector("body")`) and allow a grace period (e.g., `time.sleep(2)`) for animations to settle before asserting content visibility.
