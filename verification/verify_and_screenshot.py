
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        try:
            # Navigate to Support page where FAQ is located
            print("Navigating to Support page...")
            await page.goto("http://localhost:4173/support")

            # Wait for FAQ section
            print("Waiting for 'Common Questions'...")
            await page.wait_for_selector("text=Common Questions")

            # Scroll to view
            element = page.locator("text=Common Questions")
            await element.scroll_into_view_if_needed()

            # Take a 'Before' interaction screenshot
            # First item is open by default, second is closed
            await page.screenshot(path="verification/before_interaction.png")

            # Verify first item is open
            first_button = page.locator("button").filter(has_text="What is Rise?").first
            is_expanded = await first_button.get_attribute("aria-expanded")
            print(f"First item initial aria-expanded: {is_expanded}")

            if is_expanded != "true":
                print("WARNING: Expected first item to be expanded by default.")

            # Locate the SECOND FAQ item button (should be closed)
            second_button = page.locator("button").filter(has_text="How does the Rise Pod work?").first

            # Click to expand second item
            print("Clicking second FAQ item...")
            await second_button.click()

            # Wait for expansion (aria-expanded=true)
            print("Waiting for second item to expand...")
            await page.wait_for_selector("button[aria-expanded='true'] >> text=How does the Rise Pod work?", timeout=5000)
            print("SUCCESS: Second item expanded.")

            # Take an 'After' interaction screenshot
            print("Taking screenshot...")
            await page.screenshot(path="verification/faq_expanded.png")

        except Exception as e:
            print(f"Error: {e}")
            await page.screenshot(path="verification/error.png")
            raise e

        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
