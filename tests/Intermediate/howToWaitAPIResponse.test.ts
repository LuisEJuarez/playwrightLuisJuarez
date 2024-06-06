import { test } from "@playwright/test";

test("Read API response", async ({ page }) => {
    await page.goto("https://letcode.in/elements");
    // verify response status | URL | body

    const [response] = await Promise.all([
        page.waitForResponse(res => 
            res.status() == 200
            &&
            res.url() == "https://api.github.com/users/LuisEJuarez"
            &&
            res.body().then(b => {
                console.log("BODY==========="+b);
                return b.includes("Luis")
            })
        ),
        page.fill("input[name='username']", "LuisEJuarez"),
        page.click("button")
    ]);

    console.log(await response.json());
    
})