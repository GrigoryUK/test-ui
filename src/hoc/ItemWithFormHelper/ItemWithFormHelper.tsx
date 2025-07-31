import React, { ComponentType, FC } from 'react';

import { FormHelper, FormHelperProps } from '../../ui/FormHelper';

export interface ItemWithFormHelperProps {
  itemWithFormHelperProps?: FormHelperProps;
}

export const ItemWithFormHelper = <P extends object>(WrappedComponent: ComponentType<P & ItemWithFormHelperProps>) => {
  const Component: FC<P & ItemWithFormHelperProps> = ({ itemWithFormHelperProps, ...props }) => {
    return (
      <>
        <WrappedComponent {...(props as P)} />
        <FormHelper {...itemWithFormHelperProps} />
      </>
    );
  };

  return Component;
};
