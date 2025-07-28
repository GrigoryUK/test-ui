import React, { FC, ReactNode, useEffect } from 'react';

import {
  Box,
  BoxProps,
  ClickAwayListener,
  Grow,
  MenuList,
  MenuListProps,
  Paper,
  Popper,
  PopperPlacementType,
  PopperProps,
} from '@mui/material';

import { AnimationType } from '../../types';

export interface MenuProps {
  onHideMenu: () => void;
  anchorEl: HTMLElement | null;
  customOptions?: ReactNode;
  contentBefore?: ReactNode;
  contentAfter?: ReactNode;
  fullWidth?: boolean;
  placement?: PopperPlacementType;
  popperProps?: Partial<PopperProps>;
  boxProps?: BoxProps;
  listProps?: Partial<MenuListProps>;
  timeoutAnimation?: keyof typeof AnimationType;
  zIndexPopup?: number;
  className?: string;
}

const AUTO = 'auto';

const MIN_TIMEOUT = 0;

const Z_MENU = 1005;

export const Menu: FC<MenuProps> = (props) => {
  const {
    customOptions,
    onHideMenu,
    contentBefore,
    contentAfter,
    anchorEl,
    fullWidth,
    placement = 'auto',
    className,
    popperProps,
    listProps,
    boxProps,
    timeoutAnimation = AnimationType.normal,
    zIndexPopup,
  } = props;

  const open = Boolean(anchorEl);

  const onListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      onHideMenu();
    } else if (event.key === 'Escape') {
      onHideMenu();
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (open) {
        onHideMenu();
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [open]);

  const timeout: Record<keyof typeof AnimationType, any> = {
    [AnimationType.no_closing_animation]: open ? AUTO : MIN_TIMEOUT,
    [AnimationType.no_opening_animation]: open ? MIN_TIMEOUT : AUTO,
    [AnimationType.none]: MIN_TIMEOUT,
    [AnimationType.normal]: AUTO,
  };

  return (
    <Box
      className={className}
      zIndex={boxProps?.zIndex}
      width={(boxProps?.width ?? fullWidth) ? '100%' : 'auto'}
      {...boxProps}
    >
      <Popper
        sx={{
          zIndex: zIndexPopup ?? Z_MENU,
        }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
        {...popperProps}
      >
        {({ TransitionProps }) => (
          <Grow timeout={timeout[timeoutAnimation]} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={onHideMenu}>
                <Box>
                  {contentBefore}
                  {customOptions && (
                    <MenuList autoFocusItem={open} onKeyDown={onListKeyDown} {...listProps}>
                      {customOptions}
                    </MenuList>
                  )}
                  {contentAfter}
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};
