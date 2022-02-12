import React from 'react'

import * as styles from './styles'

const ButtonBase = ({ children, ...props }) => {
  return (
    <button css={styles.buttonBase}>
      {children}
    </button>
  )
}

export default ButtonBase
