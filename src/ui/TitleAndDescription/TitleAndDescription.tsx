import React, { FC, ReactNode } from 'react';

import { Box } from '@mui/material';

import { Text } from '../Text';

export interface TitleAndDescriptionProps {
  title: string;
  description?: ReactNode;
  rightBlock?: ReactNode;
}

export const TitleAndDescription: FC<TitleAndDescriptionProps> = (props) => {
  const { rightBlock, description, title } = props;

  return (
    <Box display={'flex'} flexDirection={'column'} gap={1} width={1}>
      <Box display={'flex'} justifyContent={'space-between'} gap={1}>
        <Text uiType={'subtitle_16_600_primary'}>{title}</Text>
        {rightBlock}
      </Box>
      {description && <Text uiType={'text_14_400_primary_06'}>{description}</Text>}
    </Box>
  );
};
