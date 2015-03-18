/* Begin: Common Block Type Interface
 *
 * Each block type component must include the BlockType mixin and implement:
 * - defaultContent()
 * - renderEditor()
 * - renderPreviewer()
 *
 * Calls to setContent() update both this component's state as well as
 * the block instance's content.
 *
 * @flow
 */

var React     = require('react')
var invariant = require('react/lib/invariant')

var BlockType = {

  getInitialState(): Object {
    invariant(this.defaultContent, "BlockType mixin requires `defaultContent` implementation.")

    return {
      content: this.props.initialContent || this.defaultContent()
    }
  },

  setContent(params: Object): void {
    var content = { ...this.state.content, ...params }

    this.setState({ content }, function() {
      this.props.updateContent(this.state.content)
    })
  }

}

module.exports = BlockType