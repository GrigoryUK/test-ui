import React, { FC, ReactNode } from 'react';

import { Box } from '@mui/material';

import { Text } from '../Text';

export interface FilterItemProps {
  subtitle: string;
  children: ReactNode;
}

export const FilterItem: FC<FilterItemProps> = (props) => {
  const { subtitle, children } = props;

  return (
    <Box>
      <Text mb={1.5} uiType={'subtitle_16_400_primary'}>
        {subtitle}
      </Text>
      {children}
    </Box>
  );
};
