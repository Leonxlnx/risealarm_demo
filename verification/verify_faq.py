from playwright.sync_api import sync_playwright

def verify_faq(page):
    # Navigate to Support page
    page.goto("http://localhost:5173/support")

    # Wait for the FAQ section to be visible
    page.wait_for_selector("text=Common Questions")

    # Find the first FAQ button (using the new accessible role)
    # It should be a button with name "What is Rise?"
    # Note: text content might be split across elements, so we look for the button containing the text
    button = page.locator("button", has_text="What is Rise?")

    if button.count() == 0:
        print("Error: Could not find FAQ button. Check if it is rendered as a button.")
        # Fallback to check if it's still a div (failure case)
        div_faq = page.locator("text=What is Rise?")
        print(f"Found element tag: {div_faq.evaluate('el => el.tagName')}")
    else:
        print("Success: Found FAQ button!")

        # Check attributes
        aria_expanded = button.get_attribute("aria-expanded")
        aria_controls = button.get_attribute("aria-controls")
        print(f"aria-expanded: {aria_expanded}")
        print(f"aria-controls: {aria_controls}")

        # Click to expand
        button.click()
        page.wait_for_timeout(1000) # Wait for animation

        # Check if aria-expanded changed (it should update if we did it right, but wait...
        # our implementation updates isOpen state, which updates the prop, which updates the attribute)
        print(f"aria-expanded after click: {button.get_attribute('aria-expanded')}")

    # Take screenshot
    page.screenshot(path="verification/faq_accessibility.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify_faq(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
