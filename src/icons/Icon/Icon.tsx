import React, { FC, SVGProps } from 'react';

import * as Icons from './Icon.data.ts';
import { IconUiType } from './Icon.types.ts';
import { UiTypeProps } from '../../types';

export interface IconProps extends Required<UiTypeProps<typeof IconUiType>>, SVGProps<any> {}

const iconComponentsMap: Record<keyof typeof IconUiType, any> = {
  [IconUiType.icon_account]: Icons.IconAccount,
  [IconUiType.icon_advertising_companies]: Icons.IconAdvertisingCompanies,
  [IconUiType.icon_alert]: Icons.IconAlert,
  [IconUiType.icon_arrow_show_more]: Icons.IconArrowShowMore,
  [IconUiType.icon_arrow_up]: Icons.IconArrowUp,
  [IconUiType.icon_arrow_asc_up]: Icons.IconArrowAscUp,
  [IconUiType.icon_arrow_asc_down]: Icons.IconArrowAscDown,
  [IconUiType.icon_audiences]: Icons.IconAudiences,
  [IconUiType.icon_banknote]: Icons.IconBanknote,
  [IconUiType.icon_battery]: Icons.IconBattery,
  [IconUiType.icon_calendar]: Icons.IconCalendar,
  [IconUiType.icon_clipboard]: Icons.IconClipboard,
  [IconUiType.icon_copy]: Icons.IconCopy,
  [IconUiType.icon_document]: Icons.IconDocument,
  [IconUiType.icon_done_file]: Icons.IconDoneFile,
  [IconUiType.icon_done_profile]: Icons.IconDoneProfile,
  [IconUiType.icon_edit]: Icons.IconEdit,
  [IconUiType.icon_file]: Icons.IconFile,
  [IconUiType.icon_filters]: Icons.IconFilters,
  [IconUiType.icon_inbox]: Icons.IconInbox,
  [IconUiType.icon_info_profile]: Icons.IconInfoProfile,
  [IconUiType.icon_info_segmentation]: Icons.IconInfoSegmentation,
  [IconUiType.icon_letter_t]: Icons.IconLetterT,
  [IconUiType.icon_letter]: Icons.IconLetter,
  [IconUiType.icon_logo]: Icons.IconLogo,
  [IconUiType.icon_main_file]: Icons.IconMainFile,
  [IconUiType.icon_map_minus]: Icons.IconMapMinus,
  [IconUiType.icon_map_plus]: Icons.IconMapPlus,
  [IconUiType.icon_map_radius]: Icons.IconMapRadius,
  [IconUiType.icon_moderation]: Icons.IconModeration,
  [IconUiType.icon_notification]: Icons.IconNotification,
  [IconUiType.icon_phone_connection]: Icons.IconPhoneConnection,
  [IconUiType.icon_phone]: Icons.IconPhone,
  [IconUiType.icon_plus]: Icons.IconPlus,
  [IconUiType.icon_reorder]: Icons.IconReorder,
  [IconUiType.icon_ruble]: Icons.IconRuble,
  [IconUiType.icon_segmentation_copy]: Icons.IconSegmentationCopy,
  [IconUiType.icon_segmentation_delete]: Icons.IconSegmentationDelete,
  [IconUiType.icon_segmentation_edit]: Icons.IconSegmentationEdit,
  [IconUiType.icon_sim]: Icons.IconSim,
  [IconUiType.icon_statistics]: Icons.IconStatistics,
  [IconUiType.icon_template_arrow_search]: Icons.IconTemplateArrowSearch,
  [IconUiType.icon_template_search]: Icons.IconTemplateSearch,
  [IconUiType.icon_trash_big]: Icons.IconTrashBig,
  [IconUiType.icon_trash]: Icons.IconTrash,
  [IconUiType.icon_user_success]: Icons.IconUserSuccess,
  [IconUiType.icon_user]: Icons.IconUser,
  [IconUiType.icon_verified]: Icons.IconVerified,
  [IconUiType.icon_warning]: Icons.IconWarning,
  [IconUiType.icon_wifi]: Icons.IconWifi,
};

export const Icon: FC<IconProps> = ({ uiType, ...props }) => {
  const IconComponent = iconComponentsMap[uiType];

  return <IconComponent {...props} />;
};
