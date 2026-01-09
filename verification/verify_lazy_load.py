
from playwright.sync_api import sync_playwright

def verify_homepage_sections():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        try:
            print("Navigating to homepage...")
            page.goto("http://localhost:5173", timeout=60000)

            print("Waiting for body...")
            page.wait_for_selector("body", timeout=10000)

            # Wait for any text to confirm content loaded.
            page.wait_for_load_state("networkidle")
            print("Network idle.")

            # Take screenshot of Top
            page.screenshot(path="verification/top_page.png")
            print("Screenshot taken: top_page.png")

            # Scroll to Problem Section
            print("Scrolling to Problem Section...")
            page.evaluate("window.scrollTo(0, 1500)")
            page.wait_for_timeout(3000)

            # Take screenshot of Problem Section
            page.screenshot(path="verification/problem_section.png")
            print("Screenshot taken: problem_section.png")

            # Scroll further
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(3000) # Wait for lazy loads at bottom

            page.screenshot(path="verification/bottom_page.png")
            print("Screenshot taken: bottom_page.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homepage_sections()
