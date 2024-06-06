import { Page } from "@playwright/test"

export default class RegisterPage{

    constructor(public page: Page){

    }

    async enterFirstName(firstName: string){
        await this.page.locator("#input-firstname")
            .fill(firstName);
    }

    async enterLastName(lastName: string){
        await this.page.locator("#input-lastname")
            .fill(lastName);
    }

    async enterEmail(email: string){
        await this.page.locator("#input-email")
            .fill(email);
    }

    async enterTelephone(telephone: string){
        await this.page.locator("#input-telephone")
            .fill(telephone);
    }
    
    async enterPassword(password: string){
        await this.page.locator("input[name='password']")
            .fill(password);
    }

    async enterConfirmPassword(password: string){
        await this.page.locator("input[name='confirm']")
            .fill(password);
    }

    async isSubscribeChecked(){
        return this.page.locator("#input-newsletter-no");
    }

    async clickTermandCondition(){
        await this.page.click("input[name='agree']")
    }

    async clickContinueToRegistrer(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click("input[value='Continue']")
        ])
    }
}