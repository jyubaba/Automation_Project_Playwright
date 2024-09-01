import { Page, test } from "@playwright/test"

let page: Page
//define the page on before all which runs before all the test
test.beforeAll(async({browser}) => {
        page = await browser.newPage() //defining the page instance
})

test("Click on Quick Tools using mouse actions on USPS", async() => {
    //navigate to USPS home
    await page.goto("https://www.usps.com")
    //hover over Quick Tools
    await page.locator("xpath=//*[text()='Quick Tools']").hover()
    //click on track a package
    await page.locator("xpath=//*[text()='Track a Package']").click()
    //scroll to the bottom of the page using mouse wheel
    await page.mouse.wheel(0,1000)
    //set the time out to see the scrolling action on track a package page
    await page.waitForTimeout(3000)
})

