import React, { FC } from 'react';

import clsx from 'clsx';

import { StyledFormHelperText } from './FormHelperText.styled.ts';
import { FormHelperTextUiType } from './FormHelperText.types.ts';
import { Collapse } from '../Collapse';
import { ItemWithTooltip } from '../../hoc';
import { UiTypeProps } from '../../types';

export interface FormHelperTextProps extends UiTypeProps<typeof FormHelperTextUiType> {
  show?: boolean;
  message?: string;
  withoutPadding?: boolean;
  isError?: boolean;
}

export const FormHelperText: FC<FormHelperTextProps> = (props) => {
  const { show = true, message, withoutPadding, uiType, isError } = props;

  const FormHelperTextWithTooltip = ItemWithTooltip(StyledFormHelperText);

  return (
    <Collapse in={show}>
      <FormHelperTextWithTooltip
        className={clsx(uiType, withoutPadding && 'withoutPadding')}
        itemWithTooltipProps={{
          disabled: uiType === FormHelperTextUiType.default,
          content: message,
          font: '12px Manrope',
          extraOffset: 28,
        }}
        error={isError}
      >
        {message}
      </FormHelperTextWithTooltip>
    </Collapse>
  );
};
