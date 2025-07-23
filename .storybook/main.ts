import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-themes', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(
      svgr({
        svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
        include: '**/*.svg',
      }),
    );

    return config;
  },
};

export default config;
