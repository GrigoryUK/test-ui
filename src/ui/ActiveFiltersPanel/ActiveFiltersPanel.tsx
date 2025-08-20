import React, { FC } from 'react';

import { Box, Chip, IconButton, useTheme } from '@mui/material';

import { Text } from '../Text';
import { ItemWithTooltip } from '../../hoc';
import { Icon } from '../../icons';

export interface ActiveFiltersPanelItemProps {
  label: string;
  value: string;
  key: string;
}

export interface ActiveFiltersPanelProps {
  items: ActiveFiltersPanelItemProps[];
  onRemoveFilter: (key: string) => void;
  onClearAll: () => void;
}

export const ActiveFiltersPanel: FC<ActiveFiltersPanelProps> = (props) => {
  const { items, onRemoveFilter, onClearAll } = props;

  const ChipWithHoc = ItemWithTooltip(Chip);

  const theme = useTheme();

  return (
    <Box display={'flex'} alignItems={'flex-start'} gap={1} mt={2} justifyContent={'space-between'}>
      <Box display={'flex'} gap={1} flexWrap={'wrap'}>
        {items.map(({ label, value, key }) => (
          <ChipWithHoc
            key={key}
            itemWithTooltipProps={{
              content: value,
              isClosingElement: true,
            }}
            label={
              <Box display={'flex'} justifyContent={'space-between'} gap={0.5}>
                <Text uiType={'text_14_400_primary_06'}>{label}: </Text>
                <Box display={'flex'} maxWidth={650} flexWrap={'wrap'}>
                  <Text uiType={'text_14_400_primary_087'}>{value}</Text>
                </Box>
              </Box>
            }
            onDelete={() => onRemoveFilter(key)}
          />
        ))}
      </Box>
      {items.length > 0 && (
        <IconButton
          onClick={onClearAll}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            width: 32,
            height: 32,
            border: `1px solid ${theme.palette.grey[300]}`,
            borderRadius: 2,
          }}
        >
          <Icon uiType={'icon_trash'} width={32} height={32} color={theme.palette.error.main} />
        </IconButton>
      )}
    </Box>
  );
};
