import type { Preview } from '@storybook/react-vite';

import './styles/storybook.css';
import '../src/styles/main.css';

import { onGetDateDecorator } from './decorators/date.decorator';
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
  decorators: [onGetThemeDecorator(), onGetDateDecorator()],
};

export default preview;
