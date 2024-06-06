import { expect, test } from "@playwright/test";
import RegisterPage from "../../../pages/registerPage";
import LoginPage from "../../../pages/loginPage";
import HomePage from "../../../pages/homePage";
import SpecialHotPage from "../../../pages/specialHotPage";
import '@testing-library/jest-dom/extend-expect';

const email = "chinoboy@mailinator.com";
const password = "Qwerty@123";

test.describe("PAge object test demo", async() => {
    test("Register test_01", async ({page, baseURL}) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=common/home`);
        register.enterFirstName("chino");
        register.enterLastName("boy");
        register.enterEmail(email);
        register.enterTelephone("1234567890");
        register.enterPassword(password);
        register.enterConfirmPassword(password);
    
        expect(await register.isSubscribeChecked()).toBeChecked();
    
        await register.clickTermandCondition();
        await register.clickContinueToRegistrer();
    
    })
    
    test("Login test_02", async ({page, baseURL}) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })
    
    test("Add to cart test_03", async ({page, baseURL}) => {
        const login = new LoginPage(page);
        const homePage =  new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email,password);
        
        await homePage.clickOnSpecialHotMenu();
        await special.addFirstProductToTheCart();
        const isCartVisible = await special.isToastVisible();
    
        expect(isCartVisible).toBeVisible();
    })
})