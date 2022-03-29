import {Locator, expect, Page} from "@playwright/test";

export class FeedbackPage {
    readonly page: Page
    readonly nameInput: Locator
    readonly emailInput: Locator
    readonly subjectInput: Locator
    readonly commentInput: Locator
    readonly clearButton: Locator
    readonly submitButton: Locator
    readonly feedbackTitle: Locator

    constructor(page: Page) {
        this.page = page
        this.nameInput = page.locator('#name')
        this.emailInput = page.locator('#email')
        this.subjectInput = page.locator('#subject')
        this.commentInput = page.locator('#comment')
        this.clearButton = page.locator("input[name='clear']")
        this.submitButton = page.locator("input[type='submit']")
        this.feedbackTitle = page.locator('#feedback-title')
    }

    async fillForm(nameInput: string, emailInput: string, subjectInput: string, commentInput: string) {
        await this.nameInput.type(nameInput)
        await this.emailInput.type(emailInput)
        await this.subjectInput.type(subjectInput)
        await this.commentInput.type(commentInput)
    }

    async resetForm() {
        await this.clearButton.click()
    }

    async submitForm() {
        await this.submitButton.click()
    }

    async assertReset() {
        await expect(this.nameInput).toBeEmpty()
        await expect(this.commentInput).toBeEmpty()
    }

    async feedbackFormSent() {
        await expect(this.feedbackTitle).toBeVisible()
    }
}