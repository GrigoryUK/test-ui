import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { Box } from '@mui/material';
import clsx from 'clsx';

import { StyledSelectPageSizeBox, StyledSelectPageSizeMenuItem } from './SelectPageSize.styled';
import { Menu } from '../Menu';
import { PAGE_SIZE } from '../../constants';
import { IconMaterial } from '../../icons';
import { OptionItemProps } from '../../types';

interface SelectSizeOptionProps extends Pick<OptionItemProps, 'key' | 'value' | 'text'> {
  selected?: boolean;
}

export interface SelectPageSizeProps {
  value?: number | null;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export const SelectPageSize: FC<SelectPageSizeProps> = (props) => {
  const { value, onChange, disabled } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [valueState, setValueState] = useState<number>(PAGE_SIZE[0] as any);

  const isOpen = Boolean(anchorEl);

  useEffect(() => {
    if (!value) {
      return;
    }

    setValueState(value);
  }, [value]);

  const onToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      return;
    }
    setAnchorEl(event.currentTarget);
  };

  const onHideMenu = () => {
    setAnchorEl(null);
  };

  const onGetOption = useCallback(
    (numbers: number): SelectSizeOptionProps => {
      return {
        key: numbers,
        value: numbers,
        text: numbers.toString(),
        selected: numbers === valueState,
      };
    },
    [valueState],
  );

  const options: SelectSizeOptionProps[] = useMemo(() => {
    return PAGE_SIZE.map(onGetOption);
  }, [onGetOption]);

  const onClickOptionFilter = (event: any) => {
    const currentValue = event.target.value;
    setValueState(currentValue.toString());

    if (!onChange) {
      return;
    }

    onChange(currentValue.toString());
  };

  return (
    <StyledSelectPageSizeBox>
      <Box
        onClick={onToggle}
        className={clsx('button', {
          open: isOpen,
          disabled: disabled,
        })}
      >
        <Box className={'number'}>{valueState}</Box>
        {isOpen ? (
          <IconMaterial uiType={'icon_arrow_drop_up_outlined'} />
        ) : (
          <IconMaterial uiType={'icon_arrow_drop_down_outlined'} />
        )}
      </Box>
      <Menu
        onHideMenu={onHideMenu}
        anchorEl={anchorEl}
        placement={'bottom'}
        customOptions={
          <>
            {options.map((item) => {
              return (
                <StyledSelectPageSizeMenuItem
                  value={item.value as string}
                  key={item.key}
                  selected={item.selected}
                  onClick={(event) => {
                    onHideMenu();
                    onClickOptionFilter(event);
                  }}
                >
                  {item.text}
                </StyledSelectPageSizeMenuItem>
              );
            })}
          </>
        }
      />
    </StyledSelectPageSizeBox>
  );
};
