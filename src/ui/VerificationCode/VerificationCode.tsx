import React, { FC } from 'react';
import VerificationInput, { VerificationInputProps } from 'react-verification-input';

import clsx from 'clsx';

import { StyledVerificationCodeBox } from './VerificationCode.styled.ts';
import { VerificationCodeSize } from './VerificationCode.types.ts';

export interface VerificationCodeProps extends VerificationInputProps {
  isError?: boolean;
  size?: keyof typeof VerificationCodeSize;
}

export const VerificationCode: FC<VerificationCodeProps> = (props) => {
  const { isError, size = 'medium', ...otherProps } = props;

  return (
    <StyledVerificationCodeBox className={clsx(size, isError && 'error')}>
      <VerificationInput
        validChars="0-9"
        inputProps={{ inputMode: 'numeric' }}
        placeholder=" "
        classNames={{
          container: `code-container`,
          character: `code-character`,
          characterInactive: 'code-character--inactive',
          characterSelected: 'code-character--selected',
        }}
        {...otherProps}
      />
    </StyledVerificationCodeBox>
  );
};
