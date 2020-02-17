class Internet {
  get pageHeader() { return $('.heading') }
  get subHeading() { return $('h2') }
  get pageFooter() { return $('#page-footer') }
  get parent() { return $('ul') }
  get childElements() { return this.parent.$$('li') }
  get firstLink() { return $('ul li:nth-child(1) a') }
  get h3Header() { return $('h3') }
  get username() { return $('#username') }
  get password() { return $('#password') }
  get target() { return $('.example #target') }
  get result() { return $('.example #result') }

  specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }
  checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`) }
  link(index) { return $(`ul li:nth-child(${index}) a`) }
 

  getLiText() {
    this.childElements.filter((element) => {
      console.log(element.getText())
    })
  }

  getSpecificElementText(index) {
      this.specificChildElement(index).waitForDisplayed()
      return this.specificChildElement(index).getText()
  }

  clickOnLink() {
    if (this.firstLink.isDisplayed() === true) {
      this.firstLink.click()
    }
    this.h3Header.waitForDisplayed()
  }

  clickCheckbox(index) {
    this.checkboxes(index).waitForDisplayed()
    this.checkboxes(index).click()
}

  /**
   * Clicks on the link based on the index provided
   * @param {Number} index the index of the element
   */
  clickLink(index) {
    this.link(index).waitForDisplayed()
    this.link(index).click()
  }

  /**
   * Enter the username into the field
   * @param {String} text username to be entered 
   */
  enterUsername(text) {
    this.username.waitForDisplayed()
    this.username.setValue(text)
  }

    /**
   * Enter the password into the field
   * @param {String} text password to be entered 
   */
  enterPassword(text) {
    this.password.waitForDisplayed()
    this.password.setValue(text)
  }

  figures(index) {
    return $(`.example .figure:nth-child(${index}) img`) 
  }

  figureDetails(index) {
    return $(`.example .figure:nth-child(${index}) .figcaption h5`)
  }

  /**
   * Hovers over the specified image
   * @param {Number} index the spicific index of the image 
   */
  hoverOnFigure(index) {
    this.figures(index).waitForDisplayed()
    this.figures(index).moveTo(1, 1)
}

  /**
   * Returns the text of the figure details
   * @param {Number} index the index of the element 
   */
  getFigureDetailsText(index) {
    this.figureDetails(index).waitForDisplayed()
    return this.figureDetails(index).getText()
  }

  /**
   * 
   * Clicks the target input fields
   */
  clickTarget() {
    this.target.waitForDisplayed()
    this.target.click()
  }

  /**
   * Send keybord keys to Target
   * @param {String} text The keyboard text to enter
   */
  sendKeysToTarget(text) {
    this.target.waitForDisplayed()
    this.target.keys(text)
  }

  /**
   * Return the text of the return element
   */
  getResultText() {
    this.result.waitForDisplayed()
    return this.result.getText()
  }

  /**
   * Scrolls to the page footer
   */
  scrollToPageFooter() {
    this.pageFooter.scrollIntoView()
   }
}

module.exports = new Internet()
