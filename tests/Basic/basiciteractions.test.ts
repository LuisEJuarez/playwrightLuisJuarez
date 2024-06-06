import { expect, test } from '@playwright/test'

test("Interaction with inputs", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = await page.locator("input#user-message");
    messageInput.scrollIntoViewIfNeeded();
    console.log(messageInput.getAttribute("placeholder"));

    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")

    console.log('Before entering data: '+ await messageInput.inputValue());

    await messageInput.fill("Hi Chinoboy!!")

    console.log('After entering data: '+ await messageInput.inputValue());
})

test("sum", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1 = await page.locator("#sum1");
    const sum2 = await page.locator("#sum2");

    const getValuesBtn = page.locator("//button[text()='Get Sum']");

    let num1 = 500;
    let num2 = 300;
    await sum1.fill(num1.toString());
    await sum2.fill(num2.toString());

    await getValuesBtn.click();

    const result = page.locator("#addmessage");

    console.log(await result.textContent());
    
    let expectedResult = num1 + num2;
    expect(result).toHaveText(expectedResult.toString());
    
})

test.only("Checkboxes", async({ page })=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const checkbox1 = await page.locator("id=isAgeSelected");
    expect(checkbox1).not.toBeChecked();

    await checkbox1.check();

    expect(checkbox1).toBeChecked();
})
