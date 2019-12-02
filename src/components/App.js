/**
 * This is the root component that contains sections for
 * toggling between viewing modes and viewing managed content
 */

import React from 'react'
import Animator from './Animator'
import Blocks from '../stores/Blocks'
import EditorBlock from './EditorBlock'
import Switch from './Switch'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

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
          <Switch app={app} />
          <Animator className="col-block-children">
            {parents.map(this.getBlock, this)}
          </Animator>
        </DndProvider>
      </div>
    )
  }
}
