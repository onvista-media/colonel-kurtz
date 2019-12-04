import React from 'react'
import DragableButton from './DragableButton'
import Actions from '../actions/blocks'
import typesForBlock from '../utils/typesForBlock'

export default class DragableButtonNav extends React.Component {
  onAdd = app => (id, position) => {
    app.push(Actions.create, [id, position])
  }

  render() {
    let { app, parent } = this.props
    let types = typesForBlock(app.state.blockTypes, parent)
    return (
      <nav className="col-switch-nav" role="navigation">
        {types.map((block, id) => (
          <DragableButton
            id={block.id}
            key={id}
            name={block.label}
            onAdd={(id, position) => this.onAdd(app)(id, position)}
          />
        ))}
      </nav>
    )
  }
}
