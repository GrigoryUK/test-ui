import React, { FC, MutableRefObject, ReactNode, useEffect } from 'react';

import { DialogContent, DialogContentProps, DialogProps, DialogTitle, DialogTitleProps, useTheme } from '@mui/material';

import { StyledModalBox, StyledModalDialog, StyledModalIconButton } from './Modal.styled.ts';
import { ModalSize } from './Modal.types.ts';
import { Loader } from '../Loader';
import { Text } from '../Text';
import { IconMaterial } from '../../icons';

export interface ModalProps {
  onClose?: (event?: object) => void;
  isOpen?: boolean;
  isLoading?: boolean;
  title?: string;
  content?: ReactNode;
  contentAfter?: ReactNode;
  contentBefore?: ReactNode;
  withoutButtonClose?: boolean;
  dialogProps?: Partial<DialogProps>;
  size?: keyof typeof ModalSize;
  fullWidth?: boolean;
  ref?: MutableRefObject<HTMLDivElement>;
  id?: string;
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  zIndex?: number;
}

const MIN_TIMEOUT = 0;

const DEFAULT_TIMEOUT = 150;

export const Modal: FC<ModalProps> = (props) => {
  const {
    content,
    withoutButtonClose,
    dialogProps,
    onClose,
    isOpen = false,
    size = 'medium',
    fullWidth,
    ref,
    id,
    zIndex,
    dialogTitleProps,
    dialogContentProps,
    contentAfter,
    title,
    contentBefore,
    isLoading,
  } = props;

  const theme = useTheme();

  const onCloseModal: DialogProps['onClose'] = (event, reason) => {
    if (!onClose) {
      return;
    }

    if (reason === 'backdropClick') {
      return;
    }

    onClose(event);
  };

  const onPopState = () => {
    if (isOpen) {
      if (!onClose) {
        return;
      }
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('popstate', onPopState);
    }

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, [isOpen]);

  const transitionDuration = {
    appear: DEFAULT_TIMEOUT,
    enter: DEFAULT_TIMEOUT,
    exit: MIN_TIMEOUT,
  };

  return (
    <StyledModalDialog
      {...dialogProps}
      style={{ zIndex: zIndex ?? theme.zIndex.modal }}
      id={id}
      ref={ref}
      onClose={onCloseModal}
      transitionDuration={transitionDuration}
      open={isOpen}
      maxWidth={'lg'}
      fullWidth={fullWidth ?? true}
      PaperProps={{
        sx: {
          width: ModalSize[size],
        },
      }}
    >
      {isLoading && (
        <StyledModalBox>
          <Loader height={'auto'} />
        </StyledModalBox>
      )}
      {!withoutButtonClose && (
        <StyledModalIconButton
          size={'small'}
          onClick={() => {
            if (!onClose) {
              return;
            }

            onClose();
          }}
        >
          <IconMaterial uiType={'icon_close'} />
        </StyledModalIconButton>
      )}
      {title && (
        <DialogTitle
          sx={{
            maxWidth: '95%',
          }}
          {...dialogTitleProps}
        >
          <Text uiType={'title_20_600_primary_087'}>{title}</Text>
        </DialogTitle>
      )}
      {contentBefore}
      {content && (
        <DialogContent
          sx={{
            pt: title ? '8px !important' : '16px !important',
            pb: title ? 1 : 2,
          }}
          {...dialogContentProps}
        >
          {content}
        </DialogContent>
      )}
      {contentAfter}
    </StyledModalDialog>
  );
};
