import React from 'react'
import { DropTarget } from 'react-dnd'
const style = {
  height: '1rem',
  width: '100%'
}
const DropableArea = ({ canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver
  let backgroundColor = '#fff'
  if (isActive) {
    backgroundColor = '#eee'
  } else if (canDrop) {
    backgroundColor = '#f6f6f6'
  }
  return (
    <div ref={connectDropTarget} style={{ ...style, backgroundColor }}></div>
  )
}
export default DropTarget(
  'BLOCK',
  {
    drop: props => {
      return props
    }
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(DropableArea)
