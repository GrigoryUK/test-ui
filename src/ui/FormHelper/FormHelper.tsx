import React, { FC } from 'react';

import clsx from 'clsx';

import { StyledFormHelperFormHelperText } from './FormHelper.styled.ts';
import { FormHelperUiType } from './FormHelper.types.ts';
import { Collapse } from '../Collapse';
import { ItemWithTooltip } from '../../hoc';
import { UiTypeProps } from '../../types';

export interface FormHelperProps extends UiTypeProps<typeof FormHelperUiType> {
  show?: boolean;
  message?: string;
  withoutPadding?: boolean;
}

export const FormHelper: FC<FormHelperProps> = (props) => {
  const { show = true, message, withoutPadding, uiType } = props;

  const FormHelperTextWithTooltip = ItemWithTooltip(StyledFormHelperFormHelperText);

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
      >
        {message}
      </FormHelperTextWithTooltip>
    </Collapse>
  );
};
