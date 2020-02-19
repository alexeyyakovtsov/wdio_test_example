internetPage = require('../pages/internet.page')

describe('Javascript Alerts',function ()  {
    it('should get text of alert', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        internetPage.clickJavaSciptAlertButton(1)
        assert.equal('I am a JS Alert', browser.getAlertText()) 
    })

    it('should accept allert', () => {
        browser.acceptAlert()
        assert.equal('You successfuly clicked an alert', internetPage.getResultText())
    })

    it('should dismiss allert', () => {
        internetPage.clickJavaSciptAlertButton(2)
        browser.dismissAlert()
        assert.equal('You clicked: Cancel', internetPage.getResultText())
    })

    it('should send text to the allert', () => {
        internetPage.clickJavaSciptAlertButton(3)
        browser.sendAlertText('This is some text')
        browser.acceptAlert()
        assert.equal('You entered: This is some text', internetPage.getResultText())
    })
})