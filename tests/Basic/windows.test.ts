import {test} from "@playwright/test"

test("interact with multiple tabs", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());
    
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);

    console.log(newWindow.url());
    
})

test("interact with multiple tabs at same time", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());
    
    const [multiWindows] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth"),
        page.locator("#followboth").scrollIntoViewIfNeeded()
    ]);
    await multiWindows.waitForLoadState();
    const pages = multiWindows.context().pages();
    console.log("No of windows: "+pages.length);
    
    pages.forEach(window => {
        console.log(window.url());
        
    })

    //await pages[1].fill("","");
    
    let facebookPage;
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if (url.includes("facebook")) {
            facebookPage = pages[index];
        }
    }

    const text = await facebookPage.textContent("//h1");

    console.log(text);
    
})