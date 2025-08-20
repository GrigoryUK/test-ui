import React, { FC, MouseEvent, ReactNode, useEffect, useState } from 'react';

import { Box, MenuList } from '@mui/material';
import clsx from 'clsx';

import {
  StyledTranslationSelectionListItemButton,
  StyledTranslationSelectionMenuItem,
} from './TranslationSelection.styled';
import { Menu } from '../Menu';
import { Text } from '../Text';
import { Icon } from '../../icons';

export type TranslationSelectionItemType = 'ru-RU' | 'en-EN' | 'kz-KZ' | 'uz-UZ';

export interface TranslationSelectionItemProps {
  text: string | ReactNode;
  value: TranslationSelectionItemType;
  isVisible?: boolean;
}

export interface TranslationSelectionProps {
  items: TranslationSelectionItemProps[];
  onChange?: (value: TranslationSelectionItemType) => void;
  value?: TranslationSelectionItemType;
}

export const TranslationSelection: FC<TranslationSelectionProps> = (props) => {
  const { items, value, onChange } = props;

  const OFFSET_MENU = [-8, 8];

  const INITIAL_STATE = 'en-EN';

  const [currentValue, setCurrentValue] = useState<TranslationSelectionItemType | null>(INITIAL_STATE);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const isOpen = Boolean(anchorEl);

  const onHideMenu = () => {
    setAnchorEl(null);
  };

  const onToggle = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (!value) {
      return;
    }

    setCurrentValue(value);
  }, [value]);

  const iconMap: Record<TranslationSelectionItemType, any> = {
    'ru-RU': <Icon uiType={'icon_flag_russia'} />,
    'en-EN': <Icon uiType={'icon_flag_usa'} />,
    'uz-UZ': <Icon uiType={'icon_flag_uzbekistan'} />,
    'kz-KZ': <Icon uiType={'icon_flag_kazakhstan'} />,
  };

  const currentItem = items.find((item) => item.value === currentValue);

  const onChangeValue = (value: TranslationSelectionItemType) => {
    setCurrentValue(value);
    onChange?.(value);
    onHideMenu();
  };

  return (
    <StyledTranslationSelectionListItemButton onClick={onToggle} selected={isOpen}>
      <Box width={1} display={'flex'} justifyContent={'space-between'} gap={1} alignItems={'center'}>
        <Box display={'flex'} alignItems={'center'} gap={2}>
          {iconMap[currentItem?.value ?? INITIAL_STATE]}
          <Text uiType={'text_14_400_primary_087'}>{currentItem?.text}</Text>
        </Box>
        <Icon className={clsx('arrow', isOpen && 'selected')} uiType={'icon_arrow_up'} />
      </Box>
      <span className={clsx('divider', isOpen && 'selected')}></span>
      <Menu
        anchorEl={anchorEl}
        onHideMenu={onHideMenu}
        placement={'right-end'}
        popperProps={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: OFFSET_MENU,
              },
            },
          ],
        }}
        contentBefore={
          <MenuList>
            {items
              .filter((item) => item.isVisible === undefined || item.isVisible)
              .map((item, index) => {
                return (
                  <StyledTranslationSelectionMenuItem
                    onClick={() => {
                      onChangeValue(item.value);
                    }}
                    selected={item.value === currentItem?.value}
                    key={`${item.value}__${index}`}
                  >
                    <Box display={'flex'} alignItems={'center'} gap={1.5}>
                      {iconMap[item.value]}
                      <Text uiType={'text_14_400_primary_087'}>{item.text}</Text>
                    </Box>
                  </StyledTranslationSelectionMenuItem>
                );
              })}
          </MenuList>
        }
      />
    </StyledTranslationSelectionListItemButton>
  );
};
