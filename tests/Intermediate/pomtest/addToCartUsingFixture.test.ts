import { expect, test } from "../../../base/pomFixture";
//import '@testing-library/jest-dom/extend-expect';
import * as data from "../../../test-data/addToCart-test-data.json"   //*** TO USE DATA FROM JSON */

//const email = "chinoboy@mailinator.com";
//const password = "Qwerty@123";

test.describe("PAge object test demo", async() => {
    test("Register test_01", async ({page, baseURL, registerPage}) => {
        //const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=common/home`);
        registerPage.enterFirstName(data.firstName);
        registerPage.enterLastName(data.lastName);
        registerPage.enterEmail(data.email);
        registerPage.enterTelephone(data.phone_number);
        registerPage.enterPassword(data.password);
        registerPage.enterConfirmPassword(data.password);
    
        expect(await registerPage.isSubscribeChecked()).toBeChecked();
    
        await registerPage.clickTermandCondition();
        await registerPage.clickContinueToRegistrer();
    
    })
    
    test("Login test_02", async ({page, baseURL, loginPage}) => {
        //const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterEmail(email);
        await loginPage.enterLoginPassword(password);
        await loginPage.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })
    
    test("Add to cart test_03", async ({page, baseURL, loginPage, homePage, specialHotPage}) => {
        //const login = new LoginPage(page);
        //const homePage =  new HomePage(page);
        //const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(email,password);
        
        await homePage.clickOnSpecialHotMenu();
        await specialHotPage.addFirstProductToTheCart();
        const isCartVisible = await specialHotPage.isToastVisible();
    
        expect(isCartVisible).toBeVisible();
    })
})