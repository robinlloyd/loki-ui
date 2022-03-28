import React from 'react'
import ButtonBase from '@loki-ui/button-base'

const ButtonPrimary = ({ children, ...props }) => {
  return (
    <ButtonBase {...props}>
      {children}
    </ButtonBase>
  )
}

export default ButtonPrimary
