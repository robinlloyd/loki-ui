import React from 'react'

import ButtonPrimary from './index'

export default {
  component: ButtonPrimary,
  title: 'buttons'
}

const Template = args => <ButtonPrimary onClick={() => { console.log('Click!') }}>Button for clicking</ButtonPrimary>

export const Primary = Template.bind({})
