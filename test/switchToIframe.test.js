internetPage = require('../pages/internet.page')

describe('Should switch to Iframe', function() {
    it('Should switch to Iframe', () => {
        browser.url(`${browser.options.baseUrl}/iframe`)
        internetPage.h3Header.waitForDisplayed()
        internetPage.iframe.waitForDisplayed()
        browser.switchToFrame(internetPage.iframe)
        internetPage.sendTextToBody('This is the text in the iframe body')
        assert.equal('This is the text in the iframe body', internetPage.iframeBody.getText())
    })
})