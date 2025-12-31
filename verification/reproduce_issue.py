
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to Support page where FAQ is located
        print("Navigating to Support page...")
        await page.goto("http://localhost:4173/support")

        # Wait for FAQ section
        print("Waiting for 'Common Questions'...")
        await page.wait_for_selector("text=Common Questions")

        # Check if the FAQ items are buttons or divs
        # We look for the question text and see if its parent/ancestor is a button
        faq_question = page.locator("text=What is Rise?").first

        # Try to find a button ancestor
        is_button = await faq_question.evaluate("""element => {
            return element.closest('button') !== null;
        }""")

        if not is_button:
            print("FAILURE: FAQ trigger is NOT a <button>. Accessibility issue confirmed.")
        else:
            print("SUCCESS: FAQ trigger IS a <button>.")

        # Check for aria-expanded
        has_aria = await faq_question.evaluate("""element => {
            const trigger = element.closest('[role="button"]') || element.closest('button') || element.closest('.cursor-pointer');
            return trigger && trigger.hasAttribute('aria-expanded');
        }""")

        if not has_aria:
            print("FAILURE: FAQ trigger missing 'aria-expanded'.")
        else:
            print("SUCCESS: FAQ trigger has 'aria-expanded'.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
