import siblingsOf from '../utils/siblingsOf'
import Actions from '../actions/blocks'

const { destroy, move } = Actions

export default [
  {
    id: 'moveBefore',
    label: 'Hoch schieben',
    onClick(app, block) {
      app.push(move, [block, -1])
    },
    isDisabled(app, block) {
      return siblingsOf(app.state.blocks, block)[0] === block
    }
  },
  {
    id: 'moveAfter',
    label: 'Runter schieben',
    onClick(app, block) {
      app.push(move, [block, 1])
    },
    isDisabled(app, block) {
      return siblingsOf(app.state.blocks, block).pop() === block
    }
  },
  {
    id: 'destroy',
    label: 'Löschen',
    onClick(app, block) {
      app.push(destroy, block.id)
    }
  }
]
