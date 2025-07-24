import React, { ReactNode } from 'react';

import { Box, BoxProps } from '@mui/material';

import { Tooltip } from '../../ui';

export interface AllVariantsProps<T = any> {
  uiTypes?: T;
  Component?: (uiType: keyof T) => ReactNode;
  column?: number;
  maxWidth?: number | string;
  customContent?: ReactNode;
  boxPropsTooltip?: BoxProps;
}

export const AllVariants = <T = any,>(props: AllVariantsProps<T>) => {
  const { uiTypes, column, maxWidth, Component, customContent, boxPropsTooltip } = props;

  const options = uiTypes ? Object.values(uiTypes) : [];

  const onRenderContent = () => {
    if (customContent) {
      return customContent;
    }

    if (!options?.length || !Component) {
      return null;
    }

    return options?.map((item, index) => {
      return (
        <Tooltip
          key={`${item}__${index}`}
          itemWithTooltipProps={{
            content: `${item}`,
          }}
          boxProps={boxPropsTooltip}
        >
          {Component(item as keyof T)}
        </Tooltip>
      );
    });
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${column ?? 3}, 1fr)`,
        gap: 2,
        padding: 2,
        maxWidth: maxWidth ?? '100%',
        margin: '0 auto',
      }}
    >
      {onRenderContent()}
    </Box>
  );
};
