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
  noAnimation: 'noAnimation',
  noClosingAnimation: 'noClosingAnimation',
  noOpeningAnimation: 'noOpeningAnimation',
} as const;
