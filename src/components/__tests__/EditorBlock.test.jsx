import Colonel     from '../../Colonel'
import EditorBlock from '../EditorBlock'
import TypeFixture from './fixtures/testBlockType'

describe('Components - EditorBlock', function() {
  let TestUtils = React.addons.TestUtils
  let el        = document.createElement('div')

  describe('when given a block with children', function() {
    let app;

    beforeEach(function(done) {
      app = new Colonel({
        el : el,
        blockTypes : [ TypeFixture ],
        blocks : [{
          type: TypeFixture.id,
          content: {},
          blocks: [{
            type: TypeFixture.id,
            content: {}
          }]
        }]
      })
      app.start(done)
    })

    it ('renders child blocks', function() {
      let parent    = app.pull('blocks')[0]
      let component = TestUtils.renderIntoDocument(<div><EditorBlock app={ app } block={ parent } /></div>)

      component.getDOMNode().querySelectorAll('.col-editor-block').length.should.equal(2)
    })
  })
})