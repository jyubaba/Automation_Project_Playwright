import { Page, test } from "@playwright/test"

let page: Page
//define the page on before all which runs before all the test
test.beforeAll(async({browser}) => {
        page = await browser.newPage() //defining the page instance
})

test("Search for cars in google", async() => {
    //set car array list
    //let cars = ["BMW", "Toyota", "Audi", "Ford", "Honda"]
    let cars = Array<string>()
    cars.push("BMW")
    cars.push("Toyota")
    cars.push("Audi")
    cars.push("Ford")

    for(let i = 0; i < cars.length; i++){
         //navigate to google home
         await page.goto("https://www.google.com/")
         //search for cars
         await page.locator("//*[@name='q']").fill(cars[i])
         //submit on the search field
         await page.keyboard.press("Enter")
         //capture the search result
         let searchResult = await page.locator("//*[@id='result-stats']").textContent()
         console.log(" For " + cars[i] + " the search result is " + searchResult) 
    }
})