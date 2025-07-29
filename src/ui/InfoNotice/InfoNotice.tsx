import React, { FC, ReactNode } from 'react';

import { Box, useTheme } from '@mui/material';

import { PaperBox } from '../PaperBox';
import { Text } from '../Text';

export interface InfoNoticeProps {
  text: string;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  icon?: ReactNode;
}

export const InfoNotice: FC<InfoNoticeProps> = (props) => {
  const { icon, backgroundColor, textColor, text, borderColor } = props;

  const theme = useTheme();

  return (
    <PaperBox
      sx={{
        display: 'flex',
        border: `1px solid ${borderColor ?? theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        gap: '14px',
        backgroundColor: backgroundColor ?? theme.palette.background.default,
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      {icon && (
        <Box display={'flex'} alignSelf={'start'}>
          {icon}
        </Box>
      )}
      <Text color={textColor ?? `${theme.palette.deepBlue.main}`} uiType={'subtitle_16_700_primary_087'}>
        {text}
      </Text>
    </PaperBox>
  );
};
