import React from 'react'
import { DropTarget } from 'react-dnd'
const style = {}
const DropableArea = ({ canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver
  let backgroundColor = '#fff'
  if (isActive) {
    backgroundColor = '#a51890'
  } else if (canDrop) {
    backgroundColor = '#eee'
  }
  return (
    <div
      className="col-block-dropable"
      ref={connectDropTarget}
      style={{ ...style, backgroundColor }}
    ></div>
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
