describe('Primeiro teste', () => {
    it('Acessar omenu forms', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('teste')
        expect(await $('~text-input')).toBeDisplayed()
        await $('~Dropdown').click();
        await $('android=new UiSelector().text("webdriver.io is awesome")').click();
    });
});