import { test } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";

test.describe('Login Page Visual Tests', () => {
    let homepage: HomePage
    let loginpage: LoginPage

    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page)
        homepage = new HomePage(page)

        await homepage.visit()
        await homepage.clickOnSignin()
    })

    test('Login Form', async ({}) => {
        await loginpage.snapshotLoginForm()
    })

    test('Error Login Message', async  ({}) => {
        await loginpage.login('Fail', 'Some Invalid Pass')
        await loginpage.snapshotErrorMessage()
    })


})