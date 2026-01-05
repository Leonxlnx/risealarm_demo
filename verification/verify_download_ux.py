from playwright.sync_api import sync_playwright

def verify_download_page_ux():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173/download")

        # Check if the disabled buttons are present
        apple_btn = page.locator("button[aria-label*='App Store']")
        android_btn = page.locator("button[aria-label*='Android']")

        # Verify they are disabled
        print(f"Apple button disabled: {apple_btn.is_disabled()}")
        print(f"Android button disabled: {android_btn.is_disabled()}")

        # Verify aria-labels
        print(f"Apple label: {apple_btn.get_attribute('aria-label')}")
        print(f"Android label: {android_btn.get_attribute('aria-label')}")

        # Check the form container has aria-live="polite"
        form_container = page.locator("div[aria-live='polite']")
        print(f"Aria-live container count: {form_container.count()}")

        # Take a screenshot
        page.screenshot(path="verification/download_ux.png")
        browser.close()

if __name__ == "__main__":
    verify_download_page_ux()
