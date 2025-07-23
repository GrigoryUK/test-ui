import React, { FC } from 'react';
import { UiTypeProps } from '../../types';
import { TestUiType } from './Test.types.ts';

export interface TestProps extends UiTypeProps<typeof TestUiType> {}

export const Test: FC<TestProps> = (props) => {
  const { uiType } = props;

  switch (uiType) {
    case TestUiType.default:
    default:
      return (
        <div>
          <div></div>
        </div>
      );
  }
};
