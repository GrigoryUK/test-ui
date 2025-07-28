import React, { FC } from 'react';

import { HelperText, HelperTextProps } from '../HelperText';

export interface ErrorProps extends Omit<HelperTextProps, 'isError'> {}

export const Error: FC<ErrorProps> = (props) => {
  const { show = false, ...otherProps } = props;

  return <HelperText isError show={show} {...otherProps} />;
};
