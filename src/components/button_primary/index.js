/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import ButtonBase from '../button_base'

import * as styles from './styles'

const ButtonPrimary = ({ children, ...props }) => {
  return (
    <ButtonBase css={styles.primary} {...props}>
      {children}
    </ButtonBase>
  )
}

export default ButtonPrimary
