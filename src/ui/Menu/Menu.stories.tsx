import React, { useEffect } from 'react';

import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuProps } from './Menu';
import { Button } from '../Button';

const meta: Meta<typeof Menu> = {
  title: 'UI/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: {
    anchorEl: null,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Menu>;

const Template = (args: MenuProps) => {
  const [value, setValue] = React.useState<HTMLElement | null>(null);

  const isOpen = Boolean(value);

  const onHideMenu = () => {
    setValue(null);
  };

  useEffect(() => {
    setValue(args.anchorEl as any);
  }, [args.anchorEl]);

  const onToggle = (event: React.MouseEvent<HTMLElement>) => {
    setValue(event.currentTarget);
  };

  return (
    <Box>
      <Button onClick={onToggle} uiType={'shadow'}>
        {isOpen ? 'show' : 'hidden'}
      </Button>
      <Menu {...args} onHideMenu={onHideMenu} />
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};
