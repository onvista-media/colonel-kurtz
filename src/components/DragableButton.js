import React from 'react'
import { DragSource } from 'react-dnd'
import { Button } from '@material-ui/core'

const DragableButton = ({
  icon,
  name,
  isDragging,
  connectDragSource,
  onAdd,
  id
}) => {
  const opacity = isDragging ? 0.4 : 1
  return (
    <Button
      size="small"
      className="col-switch-nav__button"
      ref={connectDragSource}
      style={{ opacity }}
      onClick={() => onAdd(id)}
    >
      {icon || name}
    </Button>
  )
}
export default DragSource(
  'BLOCK',
  {
    beginDrag: props => {
      return props
    },
    endDrag(props, monitor) {
      const item = monitor.getItem()
      const { id, onAdd } = item
      const dropResult = monitor.getDropResult()
      if (dropResult && !dropResult.destroy) {
        onAdd(id, dropResult.position)
      }
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(DragableButton)
