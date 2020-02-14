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
})