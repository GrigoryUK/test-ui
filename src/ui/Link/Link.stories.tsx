import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Link, LinkProps } from './Link';
import { LinkUiType } from './Link.types';
import { AllVariants, LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    uiType: LinkUiType.default,
    children: LibraryUtils.getLoremRu(10),
    href: LibraryUtils.getRandomLink(),
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(LinkUiType),
    },
  },
};

export default meta;

const Template: StoryFn<LinkProps> = (args: LinkProps) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  uiType: LinkUiType.default,
};

export const All = () => {
  return <AllVariants<typeof LinkUiType> uiTypes={LinkUiType} Component={(uiType) => <Template uiType={uiType} />} />;
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
