import React from 'react'

const ButtonBase = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default ButtonBase
