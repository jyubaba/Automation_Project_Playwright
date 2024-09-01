import { test, expect, Page } from '@playwright/test'


let page: Page

// define the page on before all which runs before all the test
test.beforeAll(async({browser}) =>{
    page = await browser.newPage()  //defining the page instance
})

test("Search for BMW",async() => {
    //navigate to google home
    await page.goto("https://www.google.com/")
    //await page.waitForTimeout(5000)
    //search for BMW
    await page.locator("//*[@name='q']").fill("BMW")
    //submit on the search field
    await page.keyboard.press("Enter")
})

test("Capture the Search result",async() => {
    //capture the search result
    let searchResult = await page.locator("//*[@id='result-stats']").textContent()
    console.log("Search Results " + searchResult) 
    let arrayResult = searchResult.split(" ")
    console.log("BMW search number is " + arrayResult[1])
})



