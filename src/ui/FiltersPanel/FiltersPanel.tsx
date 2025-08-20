import React, { FC, ReactNode, useEffect, useState } from 'react';

import { Box, Drawer, IconButton } from '@mui/material';

import { AutocompleteMulti } from '../AutocompleteMulti';
import { AutocompleteSingle } from '../AutocompleteSingle';
import { DatePicker } from '../DatePicker';
import { Divider } from '../Divider';
import { FilterActionButtons, FilterActionButtonsProps } from '../FilterActionButtons';
import { FilterItem } from '../FilterItem';
import { Input } from '../Input';
import { Text } from '../Text';
import { IconMaterial } from '../../icons';
import { ConfigFilterProps } from '../../types';

export interface FiltersPanelProps {
  open: boolean;
  config: ConfigFilterProps[];
  initialValues: Record<string, any>;
  onClose: () => void;
  onApply: (filters: Record<string, any>) => void;
  onClear: () => void;
  textInfo: {
    title: string;
    filterActionButtonsText: Pick<FilterActionButtonsProps, 'closeText' | 'clearText' | 'applyText'>;
    labels: {
      dateRange: {
        from: string;
        to: string;
      };
      multiSelect: string;
      singleSelect: string;
      date: string;
      input: string;
    };
  };
}

export const FiltersPanel: FC<FiltersPanelProps> = (props) => {
  const { config, open, initialValues, onApply, onClear, onClose, textInfo } = props;

  const [localState, setLocalState] = useState<Record<string, any>>({});

  const onGetInitialState = (items: ConfigFilterProps[], values: Record<string, any>) => {
    const state: Record<string, any> = {};

    items.map(({ type, value }) => {
      if (type === 'multiSelect') {
        state[value] = values?.[value] ?? [];
      }

      if (type === 'dateRange') {
        const from = values?.[`${value}.From`];

        const to = values?.[`${value}.To`];
        state[`${value}.From`] = from ? new Date(from) : null;
        state[`${value}.To`] = to ? new Date(to) : null;
      }

      if (['input', 'singleSelect'].includes(type)) {
        state[value] = values?.[`${value}`];
      }
    });

    return state;
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    setLocalState(onGetInitialState(config, initialValues));
  }, [open, config, initialValues]);

  const onApplyClick = () => {
    onApply(localState ?? null);
    onClose();
  };

  const updateState = (key: string, value: any) => {
    setLocalState((prev) => ({ ...prev, [key]: value }));
  };

  const onRenderFilter = (config: ConfigFilterProps, index: number, configLength: number) => {
    let content: ReactNode;

    const key = config.value;
    switch (config.type) {
      case 'singleSelect':
        content = (
          <AutocompleteSingle
            label={textInfo?.labels?.multiSelect}
            options={config.options || []}
            value={localState[key] ?? null}
            onChange={(_, value) => updateState(key, value ?? null)}
          />
        );
        break;
      case 'dateRange':
        content = (
          <Box display="flex" gap={1}>
            <DatePicker
              label={textInfo?.labels?.dateRange?.from as string}
              value={localState[`${key}.From`] ?? null}
              onChange={(value) => updateState(`${key}.From`, value)}
              maxDate={localState[`${key}.To`] ?? undefined}
            />
            <DatePicker
              label={textInfo?.labels?.dateRange?.to as string}
              value={localState[`${key}.To`] ?? null}
              onChange={(value) => updateState(`${key}.To`, value)}
              minDate={localState[`${key}.From`] ?? undefined}
            />
          </Box>
        );
        break;
      case 'multiSelect':
        content = (
          <AutocompleteMulti
            label={textInfo?.labels?.multiSelect}
            options={config.options || []}
            value={localState[key] ?? []}
            onChange={(_, value) => updateState(key, value ?? [])}
          />
        );
        break;
      case 'input':
        content = (
          <Input
            label={textInfo?.labels?.input}
            value={localState[key] ?? []}
            onChange={(event) => updateState(key, event.target.value ?? [])}
          />
        );
        break;
      default:
        content = null;
    }

    return (
      <>
        {content}
        {index !== configLength - 1 && <Divider />}
      </>
    );
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: '0px !important' } }}>
      <Box sx={{ width: 450, p: 3, pr: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} pr={2}>
          <Text uiType={'title_20_500_primary_087'}>{textInfo?.title}</Text>
          <IconButton sx={{ p: 0.5 }} size={'small'} onClick={onClose}>
            <IconMaterial sx={{ fontSize: 24 }} uiType={'icon_close'} />
          </IconButton>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={3}
          py={1}
          pr={3}
          sx={{
            maxHeight: 'calc(100vh - 100px)',
            overflow: 'hidden',
            overflowY: 'auto',
          }}
        >
          {config.map((item, index) => {
            return (
              <FilterItem key={`${item.value}__${index}`} subtitle={item.subtitle}>
                {onRenderFilter(item, index, config.length)}
              </FilterItem>
            );
          })}
        </Box>
        <Box pr={3} pt={2} mt="auto">
          <FilterActionButtons
            applyText={textInfo.filterActionButtonsText.applyText}
            clearText={textInfo.filterActionButtonsText.clearText}
            closeText={textInfo.filterActionButtonsText.closeText}
            onClear={onClear}
            onClose={onClose}
            onApply={onApplyClick}
          />
        </Box>
      </Box>
    </Drawer>
  );
};
