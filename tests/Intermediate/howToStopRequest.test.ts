import { test } from "@playwright/test";

test("Block images - Netowrk intercep", async ({ page }) => {

    await page.route("**/*", request => {
        return request.request().resourceType() === "image"
            ? request.abort():
            request.continue();
    });

    await page.goto("https://unsplash.com/t/people");
    await page.waitForTimeout(5000);

})

test("Block adds", async ({ page }) => {

    await page.route("**/*", request => {
        return request.request().url().startsWith("https://googleads.g.doubleclick")
            ? request.abort():
            request.continue();
    });

    await page.goto("https://letcode.in/test");
    await page.waitForTimeout(5000);

})