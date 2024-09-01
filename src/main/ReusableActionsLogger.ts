import {Page} from '@playwright/test'
import {allure} from "allure-playwright"


//navigate method
export async function navigate(page:Page, url:string){
    console.log("Navigating to " + url)
    await allure.step("Navigating to " + url,async() => {
        await page.goto(url)
    })
}


//send keys method
export async function sendKeys(page:Page, xpath:string, uservalue:string, elementName:string){
    console.log("Entering keyword(s) on " + elementName)
    await allure.step("Entering keyword(s) on " + elementName,async() => {
     await page.locator(xpath).fill(uservalue)
    })
}


//click method
export async function click(page:Page, xpath:string, elementName:string){
    console.log("Clicking on " + elementName)
    await allure.step("Clicking on " + elementName,async() => {
        await page.locator(xpath).click()
    })
}


//capture text method
export async function captureText(page:Page, xpath:string, elementName:string){
    let result
    console.log("Capturing text from " + elementName)
    await allure.step("Capturing text from " + elementName,async() => {
        let result =  await page.locator(xpath).textContent()
    })
    return result
}


//press enter or submit method
export async function submit(page:Page){
    console.log("Pressing enter")
    await allure.step("Pressing enter" ,async() => {
        await page.keyboard.press("Enter")
    })
}


//mouse hover method
export async function hover(page:Page, xpath:string, elementName:string){
    console.log("Mouse hovering over " + elementName)
    await allure.step("Mouse hovering over " + elementName,async() => {
        await page.locator(xpath).hover()
    })
}


//click by index method
export async function clickByIndex(page:Page, xpath:string, index:number, elementName:string){
    console.log("Clicking by index for " + elementName)
    await allure.step("Clicking by index for " + elementName,async() => {
     await page.locator(xpath).nth(index).click()
    })
}


//scroll by pixels method
export async function scrollByPixel(page:Page, pixels:number){
    console.log("Scrolling by " + pixels + " pixels")
    await allure.step("Scrolling by " + pixels + " pixels",async() => {
        await page.mouse.wheel(0, pixels)
    })
}