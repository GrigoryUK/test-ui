import React, { FC, SVGProps } from 'react';

import { IconArrowAscDown, IconArrowAscUp, IconCopy, IconWifi } from './Icon.data.ts';
import { IconUiType } from './Icon.types.ts';
import { UiTypeProps } from '../../types';

export interface IconProps extends Required<UiTypeProps<typeof IconUiType>>, SVGProps<any> {}

export const Icon: FC<IconProps> = (props) => {
  const { uiType, ...otherProps } = props;

  const onCreateIcon = (IconComponent: React.ElementType) => {
    return <IconComponent {...otherProps} />;
  };

  switch (uiType) {
    case IconUiType.icon_arrow_asc_up:
      return onCreateIcon(IconArrowAscUp);
    case IconUiType.icon_arrow_asc_down:
      return onCreateIcon(IconArrowAscDown);
    case IconUiType.icon_copy:
      return onCreateIcon(IconCopy);
    case IconUiType.icon_wifi:
    default:
      return onCreateIcon(IconWifi);
  }
};
