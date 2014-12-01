/* @flow */

var uid = require('../utils/uid')

var BlockList = function(params: {editorId: number; blockId: number}) {
  var id: number = uid()

  this.editorId = params.editorId
  this.blockId = params.blockId
  this.id = id
  this._blocks = []
}

BlockList.prototype = {

  all() {
    return this._blocks
  },

  removeBlock(blockId) {
    this._blocks = this._blocks.filter(id => id !== blockId)
  },

  insertBlock(block, position: number) {
    this._blocks.splice(position, 0, block.id)
  }
}

module.exports = BlockList
