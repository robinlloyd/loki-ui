import { css } from '@emotion/react'

export const globals = (props) => css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Rubik, Arial, Helvetica, sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  /* a {
    color: inherit;
    text-decoration: none;
  } */

  * {
    box-sizing: border-box;
  }
`
