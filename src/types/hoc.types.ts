import {
  ItemWithFormCharactersProps,
  ItemWithFormErrorProps,
  ItemWithFormHelperProps,
  ItemWithInputMaskProps,
  ItemWithTooltipProps,
} from '../hoc';

export interface HocItemsProps
  extends ItemWithInputMaskProps,
    ItemWithFormCharactersProps,
    ItemWithFormHelperProps,
    ItemWithFormErrorProps,
    ItemWithTooltipProps {}

export type HocItemKey = 'inputMask' | 'formCharacters' | 'formHelper' | 'formError' | 'tooltip';

export type PickHocItemsUtility<T extends HocItemKey> = Pick<HocItemsProps, `itemWith${Capitalize<T>}Props`>;
