import React from 'react'
import PropTypes from 'prop-types'
import Style from './style'

const Button = ({
  children,
  type,
  size,
  onClick,
  disabled,
  className,
  style
}) => {
  return (
    <Style
      disabled={disabled}
      className={`button ${type} ${size} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </Style>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['primary', 'default', 'border']),
  size: PropTypes.oneOf(['sm', 'md']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.shape(),
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'default',
  size: 'md',
  className: '',
  style: {},
  icon: undefined,
  onClick: undefined,
  children: undefined,
  disabled: false
}

export default Button
