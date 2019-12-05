import React from 'react'
import { DragSource } from 'react-dnd'
import { Button } from '@material-ui/core'
const style = {
  padding: '0.5rem 1rem',
  marginRight: '0.5rem',
  cursor: 'move',
  float: 'left'
}
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
    <Button variant="contained" size="medium"
      ref={connectDragSource}
      style={{ ...style, opacity }}
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
