internetPage = require('../pages/internet.page')

describe('Test element actions', function() {
    it('should click elemet', () => {
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    })

    it('should get Text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })

    it('should click checkbox', () => {
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)
    })

    it('should unckeck checkbox',() => {
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)
    })

    it('should enter username',() => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterUsername("Alexey")
        assert.equal(`Alexey`, internetPage.username.getValue())
    })

    it('should enter password',() => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterPassword('Password')
        assert.equal('Password', internetPage.password.getValue())
    })

    it('should clear value',() => {
        internetPage.username.click()
        internetPage.username.clearValue()

        assert.equal('', internetPage.username.getValue())
    })
})