import React, { ComponentType, FC } from 'react';

import { FormCharacters, FormCharactersProps } from '../../ui/FormCharacters';

export interface ItemWithFormCharactersProps {
  itemWithFormCharactersProps?: FormCharactersProps;
}

export const ItemWithFormCharacters = <P extends object>(
  WrappedComponent: ComponentType<P & ItemWithFormCharactersProps>,
) => {
  const Component: FC<P & ItemWithFormCharactersProps> = ({ itemWithFormCharactersProps, ...props }) => {
    return (
      <>
        <FormCharacters
          {...itemWithFormCharactersProps}
          boxProps={{ ...itemWithFormCharactersProps?.boxProps, mb: itemWithFormCharactersProps?.boxProps?.mb ?? 0.5 }}
        />
        <WrappedComponent {...(props as P)} />
      </>
    );
  };

  return Component;
};
