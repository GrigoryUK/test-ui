import React, { FC, HTMLAttributes } from 'react';

import { Box } from '@mui/material';

import { StyledAutocompleteOptionLi } from './AutocompleteOption.styled.ts';
import { Checkbox } from '../Checkbox';
import { Highlighter } from '../Highlighter';
import { ItemWithTooltip } from '../../hoc';
import { OptionItemProps } from '../../types';

export interface AutocompleteOptionProps extends HTMLAttributes<HTMLLIElement> {
  option: OptionItemProps;
  inputValue: string;
  withHighlightText?: boolean;
  withoutCheckbox?: boolean;
  selected?: boolean;
}

export const AutocompleteOption: FC<AutocompleteOptionProps> = (props) => {
  const { withHighlightText, option, withoutCheckbox, selected, inputValue, ...otherProps } = props;

  const OptionWithHoc = ItemWithTooltip(StyledAutocompleteOptionLi);

  const BoxWithHoc = ItemWithTooltip(Box);

  const renderContent = () => {
    if (option.content && withoutCheckbox) {
      return option.content;
    }

    if (option.content && !withoutCheckbox) {
      return (
        <Box display="flex" alignItems={'center'}>
          <Checkbox checked={selected} />
          <BoxWithHoc
            textOverflow={'ellipsis'}
            display={'block'}
            overflow={'hidden'}
            whiteSpace={'nowrap'}
            width={1}
            itemWithTooltipProps={{
              content: option.content,
              placement: 'top-start',
            }}
          >
            {option.content}
          </BoxWithHoc>
        </Box>
      );
    }

    const textContent = withHighlightText ? (
      <Highlighter query={inputValue} text={option.text as string} />
    ) : (
      option.text
    );

    if (withoutCheckbox) {
      return textContent;
    }

    return (
      <Box display="flex" alignItems={'center'}>
        <Checkbox checked={selected} />
        <BoxWithHoc
          textOverflow={'ellipsis'}
          display={'block'}
          overflow={'hidden'}
          whiteSpace={'nowrap'}
          width={1}
          itemWithTooltipProps={{
            content: option.text,
            placement: 'top-start',
            font: '19px Manrope',
          }}
        >
          {textContent}
        </BoxWithHoc>
      </Box>
    );
  };

  if (option.content) {
    return (
      <li value={option.value as string} {...otherProps}>
        {renderContent()}
      </li>
    );
  }

  return (
    <OptionWithHoc
      itemWithTooltipProps={{
        content: option.text,
        placement: 'top-start',
        disabled: !withoutCheckbox,
      }}
      value={option.value as string}
      {...otherProps}
    >
      {renderContent()}
    </OptionWithHoc>
  );
};
