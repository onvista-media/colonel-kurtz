import React from 'react'
import { DragSource } from 'react-dnd'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left'
}
const DragableButton = ({ name, isDragging, connectDragSource, onAdd, id }) => {
  const opacity = isDragging ? 0.4 : 1
  return (
    <div
      ref={connectDragSource}
      style={{ ...style, opacity }}
      onClick={() => onAdd(id)}
    >
      {name}
    </div>
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
      if (dropResult) {
        onAdd(id, dropResult.position)
      }
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(DragableButton)
