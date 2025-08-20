import React, { FC } from 'react';

import { StyledActionModalButtonsDialogActions } from './ActionModalButtons.styled.ts';
import { ActionModalButtonsUiType } from './ActionModalButtons.types';
import { Button } from '../Button';
import { UiTypeProps } from '../../types';

export interface ActionModalButtonsProps extends UiTypeProps<typeof ActionModalButtonsUiType> {
  onCancel?: () => void;
  onConfirm?: () => void;
  disabledCancel?: boolean;
  disabledConfirm?: boolean;
  cancelText?: string;
  confirmText?: string;
}

export const ActionModalButtons: FC<ActionModalButtonsProps> = (props) => {
  const { uiType = ActionModalButtonsUiType.default, cancelText, confirmText, onConfirm, onCancel, disabledCancel, disabledConfirm } = props;

  return (
    <StyledActionModalButtonsDialogActions className={uiType}>
      <Button
        sx={{
          zIndex: (theme) => theme.zIndex.tooltip + 1,
        }}
        disabled={disabledCancel}
        uiType={'primary'}
        onClick={() => {
          if (!onCancel) {
            return;
          }
          onCancel();
        }}
      >
        {cancelText}
      </Button>
      <Button
        uiType={'shadow'}
        disabled={disabledConfirm}
        onClick={() => {
          if (!onConfirm) {
            return;
          }
          onConfirm();
        }}
        variant={'contained'}
      >
        {confirmText}
      </Button>
    </StyledActionModalButtonsDialogActions>
  );
};
