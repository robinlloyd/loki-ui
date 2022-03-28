import React from 'react'

import * as styles from './styles'

const ButtonBase = ({ children, ...props }) => {
  // TODO: Add element types
  return (
    <button css={styles.buttonBase} {...props}>
      {children}
    </button>
  )
}

export default ButtonBase
