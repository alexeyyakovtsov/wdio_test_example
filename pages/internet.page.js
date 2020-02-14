class Internet {
  get pageHeader() { return $('h1.headings') }
  get subHeading() { return $('h2') }
  get pageFooter() { return $('#page-footer') }
  get parent() { return $('ul') }
  get childElements() { return this.parent.$$('li') }
  get firstLink() { return $('ul li:nth-child(1) a') }
  get h3Header() { return $('h3') }

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

  clickLink(index) {
    this.link(index).waitForDisplayed()
    this.link(index).click()
  }

}
module.exports = new Internet()
