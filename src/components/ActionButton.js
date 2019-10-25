import React from 'react'
import DOM from 'react-dom'
import Btn from './Button'
import IconAdd from '@material-ui/icons/AddBox'

const defaultProps = {
  label: 'Add block',
  className: 'col-btn-fab',
  symbol: '+'
}

export default class ActionButton extends React.Component {
  focus() {
    DOM.findDOMNode(this).focus()
  }

  render() {
    let { className, disabled, label, onClick, symbol } = this.props

    return (
      <Btn
        className={className}
        onClick={onClick}
        disabled={disabled}
        title={label}
      >
        <span className="col-hidden">{label}</span>
        <IconAdd />
      </Btn>
    )
  }
}

ActionButton.defaultProps = defaultProps
