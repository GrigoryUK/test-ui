import React, { FC } from 'react';

import { Box } from '@mui/material';

import { StyledLabelInfoBox } from './LabelInfo.styled';
import { LabelInfoUiType } from './LabelInfo.types';
import { Tooltip } from '../Tooltip';
import { IconMaterial } from '../../icons';
import { UiTypeProps } from '../../types';

export interface LabelInfoProps extends UiTypeProps<typeof LabelInfoUiType> {
  content: string | number;
  tooltipContent: React.ReactNode;
  currency?: string;
}

export const LabelInfo: FC<LabelInfoProps> = (props) => {
  const { uiType = LabelInfoUiType.default, currency, content, tooltipContent } = props;

  return (
    <StyledLabelInfoBox className={uiType}>
      <Box display={'flex'} alignItems={'center'} gap={0.5}>
        <Box display={'flex'}>
          {content.toString()} {currency ? currency : ''}
        </Box>
        <Tooltip
          itemWithTooltipProps={{
            content: tooltipContent,
          }}
        >
          <IconMaterial uiType={'icon_help_outline_outlined'} />
        </Tooltip>
      </Box>
    </StyledLabelInfoBox>
  );
};
