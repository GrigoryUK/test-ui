import React, { MouseEvent, useState } from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuProps } from './Menu';
import { Button } from '../Button';
import { AnimationType } from '../../types';

const meta: Meta<typeof Menu> = {
  title: 'UI/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: {
    anchorEl: null,
    timeoutAnimation: AnimationType.normal,
    fullWidth: false,
    placement: 'bottom',
  },
  argTypes: {
    timeoutAnimation: {
      control: 'select',
      options: Object.values(AnimationType),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

const Template = (args: MenuProps) => {
  const [value, setValue] = useState<HTMLElement | null>(null);

  const isOpen = Boolean(value);

  const onHideMenu = () => {
    setValue(null);
  };

  const onToggle = (event: MouseEvent<HTMLElement>) => {
    setValue(event.currentTarget);
  };

  return (
    <Box>
      <Button onClick={onToggle} uiType={'shadow'}>
        {isOpen ? 'show' : 'hidden'}
      </Button>
      <Menu
        {...args}
        anchorEl={value}
        onHideMenu={onHideMenu}
        placement={'bottom'}
        contentBefore={
          <Box padding={1} maxWidth={300}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum dicta dignissimos earum eius facere
            hic libero minima nemo officiis pariatur quas quibusdam quo quos repellat, tempore, tenetur totam vel.
          </Box>
        }
      />
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
