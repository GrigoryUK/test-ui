import React, { FC } from 'react';

import { Box, useTheme } from '@mui/material';

import { Button } from '../Button';

export interface FilterActionButtonsProps {
  onClear: () => void;
  onClose: () => void;
  onApply: () => void;
  clearText: string;
  closeText: string;
  applyText: string;
}

export const FilterActionButtons: FC<FilterActionButtonsProps> = (props) => {
  const { onClose, closeText, clearText, applyText, onApply, onClear } = props;

  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="space-between" alignItems={'center'}>
      <Button uiType={'primary'} onClick={onClear} sx={{ color: theme.palette.text.disabled }} variant={'text'}>
        {clearText}
      </Button>
      <Box display={'flex'} alignItems={'center'} gap={1.5}>
        <Button onClick={onClose} uiType={'primary'} variant={'outlined'}>
          {closeText}
        </Button>
        <Button onClick={onApply} uiType={'primary'} variant={'contained'}>
          {applyText}
        </Button>
      </Box>
    </Box>
  );
};
