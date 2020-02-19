internetPage = require('../pages/internet.page')

describe('Drag and drop columns',function() {
    it.skip('Drag and drop column A to column B', () => {
      browser.url(`${browser.options.baseUrl}/drag_and_drop`)
      internetPage.dragColumnAToColumnB()
      assert.equal("A", internetPage.columnBHeader.getText())
      browser.pause(1000)  
    })

    it('Should drag and drop', () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        internetPage.dragDraggableToDroppable()
        assert.equal('Dropped!', internetPage.droppableParagraph.getText())
        browser.pause(1000)
    })
})