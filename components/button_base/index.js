/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import * as styles from './styles'

const ButtonBase = ({ children, ...props }) => {
  return (
    <button css={styles.base} {...props}>
      {children}
    </button>
  )
}

export default ButtonBase
