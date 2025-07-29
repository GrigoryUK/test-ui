import React, { FC } from 'react';

import { StyledActionModalButtonsDialogActions } from './ActionModalButtons.styled.ts';
import { ActionModalButtonsUiType } from './ActionModalButtons.types';
import { Button } from '../Button';
import { UiTypeProps } from '../../types';

export interface ActionModalButtonsProps extends UiTypeProps<typeof ActionModalButtonsUiType> {
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelText?: string;
  confirmText?: string;
}

export const ActionModalButtons: FC<ActionModalButtonsProps> = (props) => {
  const { uiType = ActionModalButtonsUiType.default, cancelText, confirmText, onConfirm, onCancel } = props;

  const ComponentToMap = {
    [ActionModalButtonsUiType.default]: (
      <StyledActionModalButtonsDialogActions className={uiType}>
        <Button
          sx={{
            zIndex: (theme) => theme.zIndex.tooltip + 1,
          }}
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
    ),
  };

  return ComponentToMap[uiType];
};
