import { expect, test } from '@playwright/test'

test("handling alerts", async({page})=>{
    page.on("dialog", async (alert) => {
        const alertText = alert.message();
        console.log(alertText);
        await alert.accept();
        
    })

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    await page.locator("button:has-text('Click Me')").nth(0).click();
})

test("handling confirm", async({page})=>{
    page.on("dialog", async (alert) => {
        const alertText = alert.message();
        console.log(alertText);
        await alert.dismiss();
        //await alert.accept(); click OK
        
    })

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    await page.locator("button:has-text('Click Me')").nth(1).click();

    expect(page.locator("id=confirm-demo")).toContainText("Cancel!")

})

test("handling prompt", async({page})=>{
    page.on("dialog", async (alert) => {
        const alertText = alert.message();
        console.log(alertText);
        await alert.accept("Luis Juarez")
        
    })

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    await page.locator("button:has-text('Click Me')").nth(2).click();

    expect(page.locator("id=prompt-demo")).toContainText("You have entered")

})

test("handling modal", async({page})=>{
    page.on("dialog", async (alert) => {
        const alertText = alert.message();
        console.log(alertText);
        await alert.accept("Luis Juarez")
        
    })

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("(//button[text()='Launch Modal'])").nth(0).click();

    await page.locator("(//button[text()='Save Changes'])[1]").click();

})