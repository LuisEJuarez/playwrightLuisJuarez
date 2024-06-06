import { test } from "@playwright/test";

test("handling dropdown", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo",{
        //label: "Tuesday"
        //value: "Monday"
        index: 6
    })

    await page.waitForTimeout(5000);

    await page.selectOption("#multi-select",[{
        label: "Texas"
    },{
        index: 2
    },{
        value: "Florida"
    }])
    
    await page.waitForTimeout(5000);
})

test("boostrap dropdown", async({page})=>{
    
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    
    await selectCountry("India");
    await selectCountry("Japan");
    await selectCountry("New Zealand");

    async function selectCountry(countryName) {
        await page.click("#country+span")
        
        await page.locator("ul#select2-country-results").locator("(//input[@class='select2-search__field'])[2]")
        .fill(countryName);

        await page.locator("ul#select2-country-results").locator("li",{
            hasText: countryName
        }).click();
    
        //await page.waitForTimeout(5000);
    }

})