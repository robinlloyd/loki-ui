import React from 'react'
import { addDecorator } from '@storybook/react'

import { Global, ThemeProvider } from '@emotion/react'

import { globals } from '../themes/globals'
import { defaultTheme } from '../themes/default'

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
