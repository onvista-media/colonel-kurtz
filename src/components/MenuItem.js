import Button from './Button'
import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from '../config/dndTypes'

const defaultProps = {
  className: 'col-menu-item',
  type: 'button',
  onClick() {},
  isDisabled() {}
}

class MenuItem extends React.Component {
  isDisabled() {
    let { app, block, isDisabled } = this.props
    return isDisabled(app, block)
  }

  render() {
    let {
      label,
      app,
      block,
      onOpen,
      onExit,
      active,
      isDisabled,
      items,
      isDragging, 
      connectDragSource,
      ...safe
    } = this.props
    const opacity = isDragging ? 0.4 : 1
    return (
      <Button
        {...safe}
        ref={connectDragSource}
        style={{ opacity }}
        onClick={this._onClick.bind(this)}
        disabled={this.isDisabled()}
      >
        {this._formatLabel(label)}
      </Button>
    )
  }

  _formatLabel(label) {
    let { app, block } = this.props
    if (typeof label === 'function') {
      return label(app, block, this)
    } else {
      return label
    }
  }

  _onClick() {
    let { app, block, onClick } = this.props
    onClick(app, block, this)
  }
}

export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag: props => ({ name: props.name }),
    endDrag(props, monitor) {
      const item = monitor.getItem()
      const dropResult = monitor.getDropResult()
      if (dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(MenuItem)

MenuItem.defaultProps = defaultProps
