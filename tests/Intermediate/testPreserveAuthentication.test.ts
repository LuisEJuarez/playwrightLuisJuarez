import { test } from "@playwright/test";

/**
 * You need to go here https://playwright.dev/docs/codegen#preserve-authenticated-state
 * and use the commandas to create the .json file
 * npx playwright codegen github.com/microsoft/playwright --save-storage=auth.json
 * npx playwright codegen --load-storage=auth.json github.com/microsoft/playwrigh
 */

test("Canva login", async ({ browser }) => {
    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    //const ctxt = page.context();
    //ctxt.storageState();

    await page.goto("https://www.canva.com/");
    await page.waitForTimeout(5000);
})