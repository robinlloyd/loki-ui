import React from 'react'
import { screen, render } from '@testing-library/react'
import ButtonBase from './index'

it('should render without error', () => {
  render(<ButtonBase>This is a button</ButtonBase>)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
