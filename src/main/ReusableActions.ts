import {Page} from '@playwright/test'


//navigate method
export async function navigate(page:Page, url:string){
    console.log("Navigating to " + url)
    await page.goto(url)
}


//send keys method
export async function sendKeys(page:Page, xpath:string, uservalue:string, elementName:string){
    console.log("Entering a keyword on " + elementName)
    await page.locator(xpath).fill(uservalue)
}


//click method
export async function click(page:Page, xpath:string, elementName:string){
    console.log("Clicking on " + elementName)
    await page.locator(xpath).click()
}


//capture text method
export async function captureText(page:Page, xpath:string, elementName:string){
    console.log("Capturing text from " + elementName)
    let result =  await page.locator(xpath).textContent()
    return result
}


//press enter or submit method
export async function submit(page:Page){
    console.log("Pressing Enter")
    await page.keyboard.press("Enter")
}


//mouse hover method
export async function hover(page:Page, xpath:string, elementName:string){
    console.log("Mouse hovering over " + elementName)
    await page.locator(xpath).hover()
}


//click by index method
export async function clickByIndex(page:Page, xpath:string, index:number, elementName:string){
    console.log("Clicking by index for " + elementName)
    await page.locator(xpath).nth(index).click()
}


//scroll by pixels method
export async function scrollByPixel(page:Page, pixels:number){
    console.log("Scrolling by " + pixels + " pixels")
    await page.mouse.wheel(0, pixels)
}

