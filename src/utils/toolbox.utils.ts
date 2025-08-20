import {
  cloneDeep as cloneDeepLodash,
  debounce as debounceLodash,
  DebounceSettings,
  isBoolean as isBooleanLodash,
  isEqual as isEqualLodash,
  omit as omitLodash,
} from 'lodash';

type PropertyName = string | number | symbol;

export const ToolboxUtils = () => {
  const debounce = <T extends (...args: any) => any>(func: T, wait?: number, options?: DebounceSettings) => {
    return debounceLodash(func, wait, options);
  };

  const cloneDeep = <T>(value: T): T => {
    return cloneDeepLodash(value);
  };

  const isEqual = (value: any, other: any) => {
    return isEqualLodash(value, other);
  };

  const isBoolean = (value?: any): value is boolean => {
    return isBooleanLodash(value);
  };

  const omit = <T extends object, K extends PropertyName[]>(object: T | null | undefined, ...paths: K) => {
    return omitLodash(object, ...paths);
  };

  return {
    debounce,
    cloneDeep,
    isEqual,
    isBoolean,
    omit,
  };
};
