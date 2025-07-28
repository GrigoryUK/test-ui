import { Key, ReactNode } from 'react';

export interface UiTypeProps<T extends object> {
  uiType?: keyof T;
}

export type TimeoutProps =
  | {
      appear?: number | undefined;
      enter?: number | undefined;
      exit?: number | undefined;
    }
  | number;

export const AnimationType = {
  normal: 'normal',
  no_closing_animation: 'no_closing_animation',
  no_opening_animation: 'no_opening_animation',
  none: 'none',
} as const;

export type OptionValue = string | number | null;

export interface OptionItemProps<T = OptionValue> {
  value: T;
  id?: Key;
  key?: Key;
  disabled?: boolean;
  text?: string;
  content?: ReactNode;
  isError?: boolean;
  isVisible?: boolean;
}
