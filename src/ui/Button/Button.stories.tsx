import React from "react";

import type { StoryFn } from "@storybook/react";

import { Button } from "./Button";
import { ButtonProps } from "./Button";
import { ButtonUiType } from "./Button.types";


export default {
  title: "UI/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    uiType: {
      control: { type: "select" },
      options: Object.values(ButtonUiType),
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
    onClick: { action: "clicked" },
    variant: {
        control: { type: "select" },
        options: ['contained', 'outlined', 'text'],
    }
  },
};

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  uiType: ButtonUiType.default,
  variant: 'contained',
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  uiType: ButtonUiType.primary,
  variant: 'contained',
};

export const Shadow = Template.bind({});
Shadow.args = {
  children: "Button",
  uiType: ButtonUiType.shadow,
  variant: 'contained',
};

export const ViewAll = Template.bind({});
ViewAll.args = {
  children: "Button",
  uiType: ButtonUiType.viewAll,
  variant: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  uiType: ButtonUiType.primary,
  disabled: true,
  variant: 'contained',
};