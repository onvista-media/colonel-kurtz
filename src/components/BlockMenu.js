import Animator from './Animator'
import FocusTrap from 'react-focus-trap'
import Handle from './MenuHandle'
import Item from './MenuItem'
import React from 'react'
import menuItems from '../config/menu'

const defaultProps = {
  items: []
}

export default class BlockMenu extends React.Component {
  getMenuItem(item) {
    let { id } = item

    return (
      <Item key={id} ref={el => (this[id] = el)} {...item} {...this.props} />
    )
  }

  getMenuItems() {
    const { items } = this.props

    return items.concat(menuItems).map(this.getMenuItem, this)
  }

  getMenu() {
    if (!this.props.active) return null

    return React.createElement(
      FocusTrap,
      {
        active: true,
        key: 'menu',
        className: 'col-menu',
        element: 'nav',
        onExit: this.props.onExit,
        role: 'navigation'
      },
      this.getMenuItems()
    )
  }

  render() {
    return this.getMenuItems()
  }
}

BlockMenu.Item = Item
BlockMenu.defaultProps = defaultProps
