import type { Preview } from "@storybook/react-vite";
import { getThemeDecorator } from "./decorators/themeDecorator";
import "./styles/storybook.css";

const preview: Preview = {
 parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    getThemeDecorator(),
  ],
};

export default preview;