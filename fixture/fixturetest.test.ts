import { test } from "./myFixture";

test("Fixture demo", async({page,age,email}) =>{
    console.log("Age: "+ age);
    console.log("Email: "+ email);
})