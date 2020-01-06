import React from 'react'
import { DropTarget } from 'react-dnd'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Delete from '@material-ui/icons/Delete'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import DragableButton from './DragableButton'
import Actions from '../actions/blocks'
import typesForBlock from '../utils/typesForBlock'
import { Button } from '@material-ui/core'

const deleteAreaStyle = {
  display: 'inline-block',
  float: 'right',
  padding: '3px'
}

class DragableButtonNav extends React.Component {
  onAdd(app) {
    return (id, position) => {
      app.push(Actions.create, [id, position || app.state.blocks.length])
    }
  }

  render() {
    let { app, parent, canDrop, isOver, connectDropTarget } = this.props
    let types = typesForBlock(app.state.blockTypes, parent)
    const deleteAreaIsActive = canDrop && isOver
    let color = '#ccc'
    if (deleteAreaIsActive) {
      color = '#ef5350'
    } else if (canDrop) {
      color = '#000'
    }
    return (
      <nav className="col-switch-nav" role="navigation">
        {app.label && <h6 className="col-switch-nav__label">{app.label}</h6>}
        <div className="col-switch-nav__controls">
          {types.map((block, id) => (
            <DragableButton
              id={block.id}
              key={id}
              icon={block.icon}
              name={block.label}
              onAdd={(id, position) => this.onAdd(app)(id, position)}
            />
          ))}
        </div>
        <Button
          ref={connectDropTarget}
          disabled={!canDrop}
          className="col-switch-nav__delete"
          style={{ ...deleteAreaStyle, color }}
        >
          {deleteAreaIsActive ? <Delete /> : <DeleteOutline />}
        </Button>
      </nav>
    )
  }
}

export default DropTarget(
  'BLOCK',
  {
    drop: props => ({ destroy: true, app: props.app })
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(DragableButtonNav)
