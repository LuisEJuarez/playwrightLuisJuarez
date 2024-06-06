import { test as myTest } from "@playwright/test"

type luisJ = {
    age: number,
    email: string
}

const myFixtureTest = myTest.extend<luisJ>({
    age: 27,
    email: "chino@gmail.com"
})

export const test = myFixtureTest;