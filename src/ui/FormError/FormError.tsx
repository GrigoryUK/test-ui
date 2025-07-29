import React, { FC } from 'react';

import { FormHelperText, FormHelperTextProps } from '../FormHelperText';

export interface FormErrorProps extends Omit<FormHelperTextProps, 'isError'> {}

export const FormError: FC<FormErrorProps> = (props) => {
  const { show = false, ...otherProps } = props;

  return <FormHelperText isError show={show} {...otherProps} />;
};
