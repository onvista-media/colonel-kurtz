import React from 'react'
import { DragSource } from 'react-dnd'
import Actions from '../actions/blocks'
import Animator from './Animator'
import BlockMenu from './BlockMenu'
import FallbackBlockType from '../models/FallbackBlockType'
import Switch from './Switch'
import respondsTo from '../utils/respondsTo'
import { assign } from '../utils/data'
import DropableArea from './DropableArea'

const handleStyle = {
  
}

class Block extends React.PureComponent {
  constructor() {
    super(...arguments)

    this.state = {
      extraMenuItems: [],
      menuOpen: false
    }
  }

  getBlockType() {
    let { app, block } = this.props

    let blockType = app.state.blockTypes.filter(i => i.id === block.type)[0]

    return blockType ? blockType : new FallbackBlockType({ block })
  }

  getMenuItems() {
    return this.state.extraMenuItems
  }

  setMenuItems(component) {
    if (respondsTo(component, 'getMenuItems')) {
      this.setState({ extraMenuItems: component.getMenuItems() })
    }
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  componentDidMount() {
    this.setMenuItems(this.block)

    // Trigger an initial change to ensure default content
    // is assigned immediately
    this._onChange(this.getContent(this.props.block))
  }

  getContent(block) {
    let { component } = this.getBlockType()

    let defaults = component.defaultProps || {}

    return assign({}, defaults.content, block.content)
  }

  render() {
    const {
      app,
      block,
      children,
      isDragging,
      connectDragSource,
      connectDragPreview
    } = this.props
    const { component: Component, icon, label } = this.getBlockType()
    const { menuOpen, extraMenuItems } = this.state

    // Determine content by taking the default content and extend it with
    // the current block content
    const content = this.getContent(block)

    return connectDragPreview(
      <div className="col-editor-block">
        <div className={`col-block col-block-${block.type}`}>
          {connectDragSource(
            <div className="col-block-handle" style={handleStyle}>
              {icon || label}
            </div>
          )}
          <Component
            ref={el => (this.block = el)}
            {...block}
            content={content}
            onChange={this._onChange.bind(this)}
          >
            <Switch app={app} parent={block} />
            <Animator className="col-block-children">{children}</Animator>
          </Component>

          <BlockMenu
            ref={el => (this.menu = el)}
            app={app}
            block={block}
            items={extraMenuItems}
            active={menuOpen}
            onOpen={this.openMenu.bind(this)}
            onExit={this.closeMenu.bind(this)}
          />
        </div>
        <DropableArea app={app} position={block} parent={block.parent} />
      </div>
    )
  }

  _onChange(keypath, value) {
    let { app, block } = this.props

    if (typeof keypath === 'object') {
      // onChange({ field: 'value' })
      app.push(Actions.update, [block, keypath])
    } else {
      // onChange('field', 'value')
      // onChange('deep.field', 'value')
      app.push(Actions.set, [block, keypath, value])
    }
  }
}

export default DragSource(
  'BLOCK',
  {
    beginDrag: props => {
      return props
    },
    endDrag(props, monitor) {
      const item = monitor.getItem()
      const dropResult = monitor.getDropResult()
      if (dropResult) {
        const { destroy, position, app } = dropResult
        if (destroy) {
          app.push(Actions.destroy, item.block.id)
        } else {
          const fromPosition = app.state.blocks.indexOf(item.block)
          let toPosition = 0
          if (position) {
            toPosition = app.state.blocks.indexOf(position)
            if (fromPosition > toPosition) toPosition += 1
          }

          const distance = toPosition - fromPosition
          app.push(Actions.move, [item.block, distance])
        }
      }
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  })
)(Block)
