import React, { FC, ReactNode } from 'react';

import {
  DialogActions,
  DialogContent,
  DialogContentProps,
  DialogProps,
  DialogTitle,
  DialogTitleProps,
  IconButton,
} from '@mui/material';

import { StyledVerifiedDialog } from './ConfirmDialog.styled.ts';
import { ConfirmDialogSize } from './ConfirmDialog.types.ts';
import { Button } from '../Button';
import { Text } from '../Text';
import { IconMaterial } from '../../icons';

export interface ConfirmDialogProps extends Omit<DialogProps, 'content' | 'size'> {
  content: ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
  title?: string;
  withoutCloseButton?: boolean;
  size?: keyof typeof ConfirmDialogSize;
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  withoutButtonActions?: boolean;
}

export const ConfirmDialog: FC<ConfirmDialogProps> = (props) => {
  const {
    title,
    content,
    onCancel,
    onConfirm,
    cancelText,
    confirmText,
    withoutCloseButton,
    dialogTitleProps,
    dialogContentProps,
    size = 'small',
    withoutButtonActions,
    ...otherProps
  } = props;

  return (
    <StyledVerifiedDialog
      maxWidth="lg"
      {...otherProps}
      PaperProps={{
        sx: {
          width: ConfirmDialogSize[size],
        },
      }}
    >
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
      {!withoutCloseButton && (
        <IconButton
          size={'small'}
          onClick={onCancel}
          sx={(theme) => ({
            position: 'absolute',
            right: 14,
            top: 11,
            color: theme.palette.grey[500],
          })}
        >
          <IconMaterial sx={{ fontSize: 24 }} uiType={'icon_close'} />
        </IconButton>
      )}
      {content && (
        <DialogContent
          sx={{
            pt: title ? 0 : 5,
            pb: !withoutButtonActions ? 0 : 2,
          }}
          {...dialogContentProps}
        >
          {content}
        </DialogContent>
      )}
      {!withoutButtonActions && (
        <DialogActions sx={{ gap: 1.5 }}>
          <Button uiType={'primary'} onClick={onCancel}>
            {cancelText}
          </Button>
          <Button uiType={'shadow'} onClick={onConfirm} variant={'contained'}>
            {confirmText}
          </Button>
        </DialogActions>
      )}
    </StyledVerifiedDialog>
  );
};
