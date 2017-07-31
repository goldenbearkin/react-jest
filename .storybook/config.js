/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const req = require.context('../src/components', true, /\.stories\.tsx$/)

addDecorator(story => (
  <MuiThemeProvider>
    {story()}
  </MuiThemeProvider>
));

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
