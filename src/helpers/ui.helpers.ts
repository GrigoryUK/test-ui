import { OptionItemProps } from '../types';

export const onGetOptionLabel = <T extends OptionItemProps>(option: T | string) => {
  if (!option) {
    return '';
  }

  if (typeof option === 'string') {
    return option;
  }

  if (option.value === null) {
    return '';
  }

  if (option.text) {
    return option.text;
  }

  return String(option.value);
};
