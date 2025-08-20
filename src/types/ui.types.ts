import { Key, ReactNode } from 'react';

import { PopperPlacementType } from '@mui/material';

import { InputProps } from '../ui';

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

export interface AutoCompleteBaseProps {
  label?: string;
  withHighlightText?: boolean;
  placementList?: PopperPlacementType;
  maxWidth?: number | string;
  disableClearable?: boolean;
  disabled?: boolean;
  onClear?: () => void;
  inputProps?: InputProps;
  noOptionsText?: string;
}

export type UploadFilesFileFormatType = 'PDF' | 'JPG' | 'PNG';

export type UploadFilesMimeType = 'image/png' | 'image/jpg' | 'image/jpeg' | 'application/pdf';

export interface BaseFilterConfigProps {
  value: string;
  subtitle: string;
  placeholder?: string;
  width?: number;
}

export interface MultiSelectFilterConfigProps extends BaseFilterConfigProps {
  type: 'multiSelect';
  options: OptionItemProps[];
}

export interface DateRangeFilterConfigProps extends BaseFilterConfigProps {
  type: 'dateRange';
}

export interface InputFilterConfigProps extends BaseFilterConfigProps {
  type: 'input';
}

export interface SingleSelectFilterConfigProps extends BaseFilterConfigProps {
  type: 'singleSelect';
  options: OptionItemProps[];
}

export interface DateFilterConfigProps extends BaseFilterConfigProps {
  type: 'singleSelect';
  options: OptionItemProps[];
}

export type ConfigFilterProps =
  | MultiSelectFilterConfigProps
  | DateRangeFilterConfigProps
  | InputFilterConfigProps
  | SingleSelectFilterConfigProps
  | DateFilterConfigProps;
