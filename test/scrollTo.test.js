internetPage = require('../pages/internet.page')

describe('Scroll to Element', function() {
    it.skip('should scroll to the footer', () => {
        browser.url('/')
        internetPage.pageHeader.waitForDisplayed(1000, true)
        internetPage.scrollToPageFooter()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())  
        browser.pause(1000)
    })

    it('should scroll to the footer', () => {
        browser.url('/')
        internetPage.pageFooter.scrollIntoView()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())  
        browser.pause(1000)
    })
})