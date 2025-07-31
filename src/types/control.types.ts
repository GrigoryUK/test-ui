import { ControllerFieldState, FieldValues, UseControllerProps } from 'react-hook-form';

export interface ControlFiledProps<T extends FieldValues> {
  controlProps: UseControllerProps<T>;
  onError?: (fieldState: ControllerFieldState) => boolean;
}
