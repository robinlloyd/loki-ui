import React from 'react'
import { screen, render } from '@testing-library/react'
import ButtonPrimary from './index'

it('should render without error', () => {
  render(<ButtonPrimary>This is a button</ButtonPrimary>)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
