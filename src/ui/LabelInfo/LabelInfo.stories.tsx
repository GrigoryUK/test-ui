import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { LabelInfo, LabelInfoProps } from './LabelInfo';
import { LabelInfoUiType } from './LabelInfo.types';
import { AllVariants, LibraryUtils } from '../../library-helpers';

const meta: Meta<typeof LabelInfo> = {
  title: 'UI/LabelInfo',
  component: LabelInfo,
  tags: ['autodocs'],
  args: {
    uiType: LabelInfoUiType.default,
    content: LibraryUtils.getLoremRu(5),
    currency: LibraryUtils.getCurrency(),
    tooltipContent: LibraryUtils.getLoremRu(5),
  },
  argTypes: {
    uiType: {
      control: { type: 'select' },
      options: Object.values(LabelInfoUiType),
    },
  },
};

export default meta;

const Template: StoryFn<LabelInfoProps> = (args: LabelInfoProps) => <LabelInfo {...args} />;

export const Default = Template.bind({});

Default.args = {
  uiType: LabelInfoUiType.default,
};

export const All = () => {
  return (
    <AllVariants<typeof LabelInfoUiType>
      uiTypes={LabelInfoUiType}
      Component={(uiType) => (
        <Template
          currency={LibraryUtils.getCurrency()}
          content={LibraryUtils.getLoremRu(5)}
          tooltipContent={LibraryUtils.getLoremRu(5)}
          uiType={uiType}
        />
      )}
    />
  );
};

All.parameters = {
  controls: { disable: true },
  docs: { source: { state: 'closed' } },
};
