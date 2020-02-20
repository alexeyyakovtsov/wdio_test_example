internetPage = require('../pages/internet.page')

describe('Wait for Enabled',function() {
  it('should wait for the input field to be enabled', () => {
      browser.url(`${browser.options.baseUrl}/dynamic_controls`)
      internetPage.clickEnableButton()
      internetPage.inputEnabledField.waitForEnabled(4000)
      assert.equal(true, internetPage.inputEnabledField.isEnabled())
  })  
  it('should wait fot the input field to be disabled', () => {
    internetPage.clickEnableButton()
    internetPage.inputEnabledField.waitForEnabled(4000, true)
    assert.equal(false, internetPage.inputEnabledField.isEnabled())
  })
})