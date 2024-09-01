import { Page, test } from "@playwright/test";


//declare global variable page
let page: Page

//define the page on before all which runs before all tests
// test.beforeAll(async({browser}) =>{
//     page = await browser.newPage() //defining the page instance
// })

//set up my first test function
test('Yahoo Search Results', async ({context}) => {
    let page = await context.newPage()
    //navigate to yahoo 
    await page.goto('https://www.yahoo.com/')
    //wait for a few seconds
    await page.waitForTimeout(2000)
    //enter cats into search field
    await page.locator("xpath=//*[@name='p']").fill('cats')
    //submit search
    await page.keyboard.press("Enter")
    //switch to search results tab
    console.log("Cats Search Results")
    let [newPage] = await Promise.all
        (
            [
                //create a new session for new tab
                context.waitForEvent('page'),
            ]
        )//end of promise function
    //capture number of search results and print
    let result = await newPage.locator("xpath=//*[@class='reg searchSuperTop']").textContent()
    console.log(result)
    //switch back to default tab
    await page.bringToFront()
})//end of test 1

//set up my second test function
test('Find Xfinity Store', async ({context}) => {
    let page = await context.newPage()
    //navigate to xfinity mobile page
    await page.goto('https://www.xfinity.com/mobile/')
    //wait for a few seconds
    await page.waitForTimeout(2000)
    //close cookies preference pop-up
    await page.locator("xpath=//*[@id='onetrust-reject-all-handler']").click()
    //scroll to bottom of page and click on find a store
    await page.locator("xpath=//*[@class='main-footer']").scrollIntoViewIfNeeded()
    await page.locator("xpath=//*[text()='Find a Store']").click()
    //switch to new find a store tab
    let [newPage] = await Promise.all
    (
        [
            //creating session for new tab
            context.waitForEvent('page')
        ]
    )//end of promise function
    //enter location and submit search on new tab
    await newPage.locator("xpath=//*[@id='q']").fill("New York, NY")
    await newPage.keyboard.press("Enter")
    //select the closest store location
    await newPage.locator("xpath=//*[contains(@class,'ResultList-item')]").nth(0).click()
})//end of test 2




