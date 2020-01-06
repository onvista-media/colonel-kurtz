/**
 * This is the root component that contains sections for
 * toggling between viewing modes and viewing managed content
 */

import React from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Animator from './Animator'
import Blocks from '../stores/Blocks'
import EditorBlock from './EditorBlock'
import DragableButtonNav from './DragableButtonNav'
import DropableArea from './DropableArea'

export default class App extends React.Component {
  getBlock(block, i) {
    return <EditorBlock key={block} app={this.props.app} block={block} />
  }

  render() {
    let { app } = this.props

    let parents = Blocks.filterChildren(app.state.blocks)

    return (
      <div className="colonel">
        <DndProvider backend={HTML5Backend}>
          <DropableArea app={app} />
          <div className="col-block-children">
            {parents.map(this.getBlock, this)}
          </div>
          <DragableButtonNav app={app} />
        </DndProvider>
      </div>
    )
  }
}
