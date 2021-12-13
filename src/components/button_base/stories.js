import React from 'react'

import ButtonBase from './index'

export default {
  component: ButtonBase,
  title: 'Button Base'
}

const Template = args => <ButtonBase>Yo, I'm a button!</ButtonBase>

export const Default = Template.bind({})
