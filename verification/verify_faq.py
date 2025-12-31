import time
from playwright.sync_api import sync_playwright

def verify_faq_a11y():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            print("Navigating to preview...")
            page.goto("http://localhost:4173", timeout=60000)

            # Wait for content to load
            page.wait_for_load_state('networkidle')

            # Scroll to make sure FAQ is rendered
            print("Scrolling to FAQ...")
            faq_section = page.get_by_text("Common Questions")
            faq_section.scroll_into_view_if_needed()

            # Find the first question "What is Rise?"
            print("Finding first question...")
            question = page.get_by_text("What is Rise?")

            # Get the clickable parent (in the current BAD code, it's a div)
            # In the NEW code, it should be a button

            # We want to inspect the structure.
            # Let's try to find a button with this text.
            # If the current code is bad, this should FAIL or return nothing.

            print("Checking for semantic button...")
            button_locator = page.get_by_role("button", name="What is Rise?")

            if button_locator.count() > 0:
                print("SUCCESS: Semantic button found!")
                # Check attributes
                is_expanded = button_locator.get_attribute("aria-expanded")
                print(f"aria-expanded: {is_expanded}")
            else:
                print("FAILURE: No semantic button found (Expected for 'before' state)")

                # Verify it is a div currently (for confirmation)
                div_locator = page.locator("div").filter(has_text="What is Rise?").first
                print(f"Found element tag: {div_locator.evaluate('el => el.tagName')}")

            # Take a screenshot
            page.screenshot(path="verification/faq_state.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_faq_a11y()
