import React, { FC } from 'react';

import clsx from 'clsx';

import { StyledFormHelperText } from './HelperText.styled';
import { HelperTextUiType } from './HelperText.types.ts';
import { Collapse } from '../Collapse';
import { ItemWithTooltip } from '../../hoc';
import { UiTypeProps } from '../../types';

export interface HelperTextProps extends UiTypeProps<typeof HelperTextUiType> {
  show?: boolean;
  message?: string;
  withoutPadding?: boolean;
}

export const HelperText: FC<HelperTextProps> = (props) => {
  const { show = true, message, withoutPadding, uiType } = props;

  const FormHelperTextWithTooltip = ItemWithTooltip(StyledFormHelperText);

  return (
    <Collapse in={show}>
      <FormHelperTextWithTooltip
        className={clsx(uiType, withoutPadding && 'withoutPadding')}
        itemWithTooltipProps={{
          disabled: uiType === HelperTextUiType.default,
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
