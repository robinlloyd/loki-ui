import React from 'react'

import ButtonBase from './index'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Buttons/Button Base',
  component: ButtonBase,
};

export const Base = () => <ButtonBase>Button</ButtonBase>
