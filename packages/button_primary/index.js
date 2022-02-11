import React from 'react'
import ButtonBase from '@loki-ui/button_base'

const ButtonPrimary = ({ children, ...props }) => {
  return (
    <ButtonBase {...props}>
      {children}
    </ButtonBase>
  )
}

export default ButtonPrimary
