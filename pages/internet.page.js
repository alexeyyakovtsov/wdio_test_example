class Internet {
  get pageHeader() { return $('h1.headings') }
  get subHeading() { return $('h2') }
  get pageFooter() { return $('#page-footer') }
  get parent() { return $('ul') }
  get childElements() { return this.parent.$$('li') }
  get firstLink() { return $('ul li:nth-child(1) a') }
  specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }

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
    browser.pause(5000)
  }

}
module.exports = new Internet()
