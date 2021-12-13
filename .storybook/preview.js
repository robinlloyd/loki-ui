import React from 'react'
import { addDecorator } from '@storybook/react'

import { Global, ThemeProvider } from '@emotion/react'

import { globals, defaultTheme } from '../src/themes'

addDecorator((story) => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Global styles={globals} />
      {story()}
    </ThemeProvider>
  </>
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
