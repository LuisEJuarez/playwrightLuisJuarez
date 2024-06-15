import {Browser, BrowserContext, Page, chromium} from "playwright";
import {test} from "@playwright/test";

test.describe("Drag and Drop", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async () =>{
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
    })

    test("my test drag and drop", async () =>{
        await page.goto("https://letcode.in/dropable");
        const src = await page.$("#draggable");
        const dst = await page.$("#droppable");

        if(src && dst){
            const srcBound = await src.boundingBox();
            const dstBound = await src.boundingBox();
            if(srcBound && dstBound){
                await page.mouse.move(srcBound.x + srcBound.width / 2, srcBound.y + srcBound.height / 2);
                await page.mouse.down();
                await page.mouse.move(dstBound.x + dstBound.width / 2, dstBound.y + dstBound.height / 2);
                await page.mouse.down();
            }else{
                throw new Error("There are not element")
            }
        }
    })

    test("my test drag and drop 2", async () =>{
        await page.goto("https://jqueryui.com/droppable");

        //switch to frame
        const frame = page.frame({url: "https://jqueryui.com/droppable/resources/demos/droppable/default.html"})
        if(frame){
            const src = await frame.$("#draggable");
            const dst = await frame.$("#droppable");

            if(src && dst){
                const srcBound = await src.boundingBox();
                const dstBound = await src.boundingBox();
                if(srcBound && dstBound){
                    await page.mouse.move(srcBound.x + srcBound.width / 2, srcBound.y + srcBound.height / 2);
                    await page.mouse.down();
                    await page.mouse.move(dstBound.x + dstBound.width / 2, dstBound.y + dstBound.height / 2);
                    await page.mouse.down();
                }else{
                    throw new Error("There are not element")
                }
            }
        }
    })

})