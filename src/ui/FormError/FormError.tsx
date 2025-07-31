import React, { FC } from 'react';

import clsx from 'clsx';

import { StyledFormErrorFormHelperText } from './FormError.styled.ts';
import { FormErrorUiType } from './FormError.types.ts';
import { Collapse } from '../Collapse';
import { FormHelperUiType } from '../FormHelper';
import { ItemWithTooltip } from '../../hoc/ItemWithTooltip';
import { UiTypeProps } from '../../types';

export interface FormErrorProps extends UiTypeProps<typeof FormErrorUiType> {
  show?: boolean;
  message?: string;
  withoutPadding?: boolean;
}

export const FormError: FC<FormErrorProps> = (props) => {
  const { show = false, message, withoutPadding, uiType } = props;

  const FormHelperTextWithTooltip = ItemWithTooltip(StyledFormErrorFormHelperText);

  return (
    <Collapse in={show}>
      <FormHelperTextWithTooltip
        className={clsx(uiType, withoutPadding && 'withoutPadding')}
        itemWithTooltipProps={{
          disabled: uiType === FormHelperUiType.default,
          content: message,
          font: '12px Manrope',
          extraOffset: 28,
        }}
        error
      >
        {message}
      </FormHelperTextWithTooltip>
    </Collapse>
  );
};
