import React, { ComponentType, FC } from 'react';
import InputMask, { Props } from 'react-input-mask';

export interface InputMaskProps {
  inputMaskProps?: Props;
  withMask?: boolean;
}

export interface ItemWithInputMaskProps {
  itemWithInputMaskProps?: InputMaskProps;
}

export const ItemWithInputMask = <P extends object>(WrappedComponent: ComponentType<P & ItemWithInputMaskProps>) => {
  const Component: FC<P & ItemWithInputMaskProps> = ({ itemWithInputMaskProps, ...props }) => {
    const currentWithMask = itemWithInputMaskProps?.withMask ?? false;

    if (currentWithMask) {
      return (
        <>
          <InputMask
            mask={itemWithInputMaskProps?.inputMaskProps?.mask as any}
            value={(props as any).value}
            onChange={(props as any).onChange}
            disabled={(props as any).disabled}
            onPaste={(props as any).onPaste}
            onFocus={(props as any).onFocus}
            onBlur={(props as any).onBlur}
            {...itemWithInputMaskProps?.inputMaskProps}
          >
            {(inputProps) => <WrappedComponent {...(props as P)} {...inputProps} />}
          </InputMask>
        </>
      );
    }

    return <WrappedComponent {...(props as P)} />;
  };

  return Component;
};
