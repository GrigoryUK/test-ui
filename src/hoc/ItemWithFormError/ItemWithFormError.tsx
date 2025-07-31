import React, { ComponentType, FC } from 'react';

import { FormError, FormErrorProps } from '../../ui/FormError';

export interface ItemWithFormErrorProps {
  itemWithFormErrorProps?: FormErrorProps;
}

export const ItemWithFormError = <P extends object>(WrappedComponent: ComponentType<P & ItemWithFormErrorProps>) => {
  const Component: FC<P & ItemWithFormErrorProps> = ({ itemWithFormErrorProps, ...props }) => {
    return (
      <>
        <WrappedComponent {...(props as P)} />
        <FormError {...itemWithFormErrorProps} />
      </>
    );
  };

  return Component;
};
