import type { Preview } from '@storybook/react-vite';

import './styles/storybook.css';

import { onGetThemeDecorator } from './decorators/theme.decorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [onGetThemeDecorator()],
};

export default preview;
