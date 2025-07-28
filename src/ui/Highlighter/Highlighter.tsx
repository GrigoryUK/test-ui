import React, { FC } from 'react';

import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import { Text, TextProps } from '../Text';

export interface HighlighterProps {
  text: string;
  query: string;
  textProps?: TextProps;
}

export const Highlighter: FC<HighlighterProps> = (props) => {
  const { textProps, text, query } = props;

  const matches = match(String(text), query, {
    insideWords: true,
  });

  const parts = parse(String(text), matches);

  const onGetFontWeight = (highlight: boolean) => {
    return highlight ? 700 : 400;
  };

  return (
    <Text textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'} variant={'body1'} {...textProps}>
      {parts.map((part, index) => (
        <span
          key={index}
          style={{
            fontWeight: onGetFontWeight(part.highlight),
          }}
        >
          {part.text}
        </span>
      ))}
    </Text>
  );
};
