import { test, Page } from '@playwright/test'
import { captureText, click, clickByIndex, hover, navigate, scrollByPixel, sendKeys } from '../../main/ReusableActions'


let page: Page

//define the page on before all which runs before all the tests
test.beforeAll(async({browser}) => {
    page = await browser.newPage() //defining the page instance
})

test("Shop for stamps", async() => {
    //navigate to usps home page
    await navigate(page, "https://www.usps.com/")
    //hover over shop module
    await hover(page, "xpath=//a[text()='Shop']", "Shop Module")
    //click on stamps
    await click(page,"xpath=//*[text()='Stamps']", "Stamps Button")
    //click on checkbox for stamps under category section
    await click(page,"xpath=//*[text()='Stamps (95)']", "Stamps Checkbox")
    //click on checkbox new releases under product type section
    await click(page,"xpath=//*[text()='New Releases (21)']", "New Releases Checkbox")
    //scroll by pixels about 300 to 500
    await scrollByPixel(page, 400)
    //click on first stamp using click by index method
    await clickByIndex(page,"xpath=//*[@class='col-6 col-md-4 results-per-page ']", 0, "First Stamp Option")
    //click on price amount and add stamp to cart
    await click(page,"xpath=//*[text()='Sheet of 18']", "Price Tag Box")
    await click(page,"xpath=//*[text()='Add to Cart']", "Add to Cart Button")
    //click on view cart
    await click(page, "xpath=//*[text()='View Cart']", "View Cart Button")
    //capture the stamp info and print out
    let result = await captureText(page, "//*[@class='prod-info-detail']", "Capture Stamp Details")
    console.log("The stamp details are " + result)
})

test("Search zip codes for Weight Watchers Workshops", async() => {
    //set zip code array list
    let zipCode = Array<string>()
    zipCode.push("10002")
    zipCode.push("20001")

    for(let i = 0; i < zipCode.length; i++){
        //navigate to weight watchers find a workshop
        await navigate(page, "https://www.weightwatchers.com/us/find-a-workshop/")
        //click on find a workshop module at top right
        await click(page, "//*[@icon='location']", "Find a Workshop Module")
        //search for each zip code from array list
        await sendKeys(page,"xpath=//*[@id='location-search']", zipCode[i], "Location Search Field")
        //click on search button
        await click(page, "xpath=//*[@type='submit']", "Submit Button")
        //scroll to studio search results
        await scrollByPixel(page, 400)
        //click on different studio zip code search results based on index
            if (i == 0){
                await clickByIndex(page, "xpath=//*[@class='container-k2b9Z']", 1, "Studio Links")
            } else if (i == 1){
                await clickByIndex(page, "//*[@class='container-k2b9Z']", 2, "Studio Links")
            }//end of if else condition
        //capture full address and print out
        let searchResult = await captureText(page, "xpath=//*[@class='address-FnT8k']", "Studio Search Result Info")
        console.log(searchResult)
        //scroll to studio workshops in-person schedule
        await scrollByPixel(page, 900)
        await page.waitForTimeout(2000)
        //capture and print out entire schedule table for in-person workshops
        let inPersonWorkshops = await captureText(page, "xpath=//*[@class='scheduleContainerMobile-ps6Rm']", "In-Person Workshop Schedule")
        console.log(inPersonWorkshops)
        }//end of for loop

})