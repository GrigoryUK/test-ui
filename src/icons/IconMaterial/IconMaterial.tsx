import React, { FC } from 'react';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { SvgIconProps } from '@mui/material';

import { IconMaterialUiType } from './IconMaterial.types';
import { UiTypeProps } from '../../types';

export interface IconMaterialProps extends Required<UiTypeProps<typeof IconMaterialUiType>>, SvgIconProps {}

const iconComponentsMap: Record<keyof typeof IconMaterialUiType, any> = {
  [IconMaterialUiType.icon_close]: CloseIcon,
  [IconMaterialUiType.icon_visibility]: VisibilityIcon,
  [IconMaterialUiType.icon_visibility_off]: VisibilityOffIcon,
  [IconMaterialUiType.icon_help_outline_outlined]: HelpOutlineOutlinedIcon,
  [IconMaterialUiType.icon_arrow_drop_down_outlined]: ArrowDropDownOutlinedIcon,
  [IconMaterialUiType.icon_arrow_drop_up_outlined]: ArrowDropUpOutlinedIcon,
  [IconMaterialUiType.icon_logout]: LogoutIcon,
  [IconMaterialUiType.icon_info_outlined]: InfoOutlinedIcon,
} as const;

export const IconMaterial: FC<IconMaterialProps> = (props) => {
  const { uiType, ...otherProps } = props;

  const IconComponent = iconComponentsMap[uiType];

  return <IconComponent {...otherProps} />;
};
