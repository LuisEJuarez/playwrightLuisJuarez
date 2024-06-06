import { expect, test } from "@playwright/test";
import { log } from "console";

test("interact with frames", async ({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of franes: "+allframes.length);
    
    const myFrame = page.frame("firstFr")
    await myFrame?.fill("input[name='fname']","Luis Enresto")
    await myFrame?.fill("input[name='lname']","Juarez")

    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered");

    await page.waitForTimeout(3000);
})

test("interact with frames with frameLocator", async ({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of franes: "+allframes.length);
    
    const myFrame = page.frameLocator("#firstFr")
    await myFrame.locator("input[name='fname']").fill("Luis Enresto")
    await myFrame.locator("input[name='lname']").fill("Juarez")

    const innerFrame = myFrame.frameLocator("iframe[src='innerFrame']");
    await innerFrame.locator("input[name='email']").fill("chino@hola.com");
    //expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered");

    await page.waitForTimeout(3000);
})