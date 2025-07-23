import React, { FC, SVGProps } from 'react';

import { IconUiType } from './Icon.types.ts';
import IconCopy from '../assets/icon-copy.svg?react';
import IconWifi from '../assets/icon-wifi.svg?react';
import { UiTypeProps } from '../../types';

export interface IconProps extends Required<UiTypeProps<typeof IconUiType>>, SVGProps<any> {}

export const Icon: FC<IconProps> = (props) => {
  const { uiType, ...otherProps } = props;

  const onCreateIcon = (IconComponent: React.ElementType) => {
    return <IconComponent {...otherProps} />;
  };

  switch (uiType) {
    case IconUiType.icon_copy:
      return onCreateIcon(IconCopy);
    case IconUiType.icon_wifi:
    default:
      return onCreateIcon(IconWifi);
  }
};
