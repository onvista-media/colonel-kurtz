import Block from '../Block'
import React from 'react'
import Colonel from '../../Colonel'
import DOM from 'react-dom'
import config from './fixtures/colonelConfig'
import TestUtils from 'react-dom/test-utils'

const render = TestUtils.renderIntoDocument

describe('Components - Block', function() {
  let app, component

  beforeEach(function(done) {
    app = new Colonel(config)

    app.start(function() {
      component = render(<Block app={app} block={app.state.blocks[0]} />)
      done()
    })
  })

  it('assigns default content to the block', function() {
    let block = component.props.block

    expect(block.content).toHaveProperty('text', 'Test')
  })

  it('adds a class name according to the block id', function() {
    let block = component.props.block
    let element = DOM.findDOMNode(component)
    let child = element.querySelector('.col-block')

    expect(child.className).toContain(block.type)
  })

  it('sends an onOpen callback to the menu it owns', function() {
    component.menu.props.onOpen()
    expect(component).toHaveProperty('state.menuOpen', true)
  })

  it('updates a block when it changes', function() {
    component._onChange({ fiz: 'buzz' })
    expect(component).toHaveProperty('props.block.content.fiz', 'buzz')
  })

  it('passes menu items from the block type component to the menu', function() {
    let { menu } = component

    component.setState({ menuOpen: true })

    expect(menu).toHaveProperty('test')
  })

  it('can close a menu', function() {
    let { menu } = component

    component.setState({ menuOpen: true })
    menu.props.onExit()

    expect(component).toHaveProperty('state.menuOpen', false)
  })

  it('respects default the content prop', function() {
    let { block } = component

    expect(block).toHaveProperty('props.content.text', 'Test')
  })
})
