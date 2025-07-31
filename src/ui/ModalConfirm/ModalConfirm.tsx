import React, { FC } from 'react';

import { ActionModalButtons, ActionModalButtonsProps } from '../ActionModalButtons';
import { Modal, ModalProps } from '../Modal';

export interface ModalConfirmProps
  extends Omit<ModalProps, 'onClose' | 'isLoading' | 'contentAfter' | 'contentBefore'> {
  actionModalButtonsProps: ActionModalButtonsProps;
  withoutButtonActions?: boolean;
}

export const ModalConfirm: FC<ModalConfirmProps> = (props) => {
  const { title, content, actionModalButtonsProps, withoutButtonActions, ...otherProps } = props;

  const contentAfter = withoutButtonActions ? null : (
    <ActionModalButtons
      uiType={'confirm'}
      onConfirm={actionModalButtonsProps?.onConfirm}
      confirmText={actionModalButtonsProps?.confirmText}
      cancelText={actionModalButtonsProps?.cancelText}
      onCancel={actionModalButtonsProps?.onConfirm}
    />
  );

  return (
    <Modal
      uiType={'confirm'}
      onClose={actionModalButtonsProps?.onCancel}
      content={content}
      title={title}
      contentAfter={contentAfter}
      {...otherProps}
    />
  );
};
