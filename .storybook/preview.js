import { Fragment } from 'react'
import { addDecorator } from '@storybook/react'

import { Global, ThemeProvider } from '@emotion/react'

import { baseStyles } from '../packages/base_styles'

addDecorator((story) => (
  <Fragment>
    <Global styles={baseStyles} />
    {story()}
  </Fragment>
))


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
