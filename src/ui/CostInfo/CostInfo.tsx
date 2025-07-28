import React, { FC, ReactNode } from 'react';

import clsx from 'clsx';

import { StyledCostInfoBox } from './CostInfo.styled.ts';
import { Tooltip } from '../Tooltip';
import { Icon } from '../../icons';

export interface CostInfoProps {
  tooltipContent?: ReactNode;
  disabled?: boolean;
}

export const CostInfo: FC<CostInfoProps> = (props) => {
  const { tooltipContent, disabled } = props;

  return (
    <Tooltip
      boxProps={{
        mt: '-2px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: 'fit-content',
      }}
      itemWithTooltipProps={{
        content: !disabled && tooltipContent,
        hoverForced: !disabled,
        placement: 'bottom',
      }}
    >
      <StyledCostInfoBox className={clsx(disabled && 'disabled')}>
        <Icon uiType={'icon_info_segmentation'} />
      </StyledCostInfoBox>
    </Tooltip>
  );
};
