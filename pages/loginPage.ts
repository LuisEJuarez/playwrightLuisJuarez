import { Page } from "@playwright/test";

export default class LoginPage{
    constructor(public page: Page){}

    async login(email: string, password: string){
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }

    async enterEmail(email: string){
        await this.page.locator("input[name='email']")
            .fill(email);
    }

    async enterLoginPassword(password: string){
        await this.page.locator("iinput[name='password']")
            .fill(password);
    }

    async clickLoginBtn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.locator("input[value='Login']").click()
        ])
    }
}