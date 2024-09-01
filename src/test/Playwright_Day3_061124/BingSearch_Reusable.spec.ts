import { test, expect, Page } from '@playwright/test'
import { captureText, navigate, sendKeys, submit } from '../../main/ReusableActionsLogger'


let page: Page
//define the page on before all which runs before all the test
test.beforeAll(async({browser}) => {
        page = await browser.newPage() //defining the page instance
})

test("Search for a keyword on Bing", async() => {
    //navigate to bing
    await navigate(page, "https://www.bing.com/")
    //enter a keyword in the search field
    await sendKeys(page, "//*[@name='q']", "playwright", "Search Field")
    await page.waitForTimeout(2000)
    await submit(page)
    //click on search icon
   // await click(page,"//*[@id='search_icon']","Search Icon")
})

test("Capture the search result", async() => {
    //capture the search result
    let result = await captureText(page, "//*[@id='b_tween']", "Search Result")
    let arrayResult = result.split(" ")
    console.log("The search result is " + arrayResult[1])
})