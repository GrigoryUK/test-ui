import React, { FC, useState } from 'react';

import { Box, IconButton, useTheme } from '@mui/material';

import { PaperBox } from '../PaperBox';
import { Text } from '../Text';
import { ItemWithTooltip } from '../../hoc';
import { Icon, IconMaterial } from '../../icons';

export interface UploadFilesItemProps {
  fileName: string;
  onClick?: () => void;
  isCopy?: boolean;
  maxWidth?: string | number;
  copyText: {
    textBeforeCopy: string;
    textAfterCopy: string;
  };
}

const DEFAULT_DELAY = 2000;

export const UploadFilesItem: FC<UploadFilesItemProps> = (props) => {
  const { fileName, isCopy, onClick, copyText, maxWidth } = props;

  const [copied, setCopied] = useState(false);

  const theme = useTheme();

  const onCopy = () => {
    navigator.clipboard.writeText(fileName).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), DEFAULT_DELAY);
    });
  };

  const BoxWithHoc = ItemWithTooltip(Box);

  return (
    <PaperBox
      paperProps={{
        variant: 'outlined',
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 42,
        padding: '0 12px',
        justifyContent: 'space-between',
        width: maxWidth ?? 1,
        boxShadow: 'none',
        gap: 2,
      }}
    >
      <Box display="flex" alignItems="center" gap={1.5}>
        <>
          <Icon uiType={'icon_done_file'} width={24} color={theme.palette.text.disabled} />
          <BoxWithHoc
            display={'flex'}
            itemWithTooltipProps={{
              content: fileName,
              extraOffset: 12,
              font: '16px Manrope medium',
            }}
          >
            <Text
              noWrap
              overflow={'hidden'}
              textOverflow={'ellipsis'}
              whiteSpace={'nowrap'}
              uiType={'subtitle_16_500_primary_087'}
            >
              {fileName}
            </Text>
          </BoxWithHoc>
        </>
      </Box>
      {isCopy ? (
        <BoxWithHoc
          display={'flex'}
          itemWithTooltipProps={{
            content: copied ? copyText.textAfterCopy : copyText.textBeforeCopy,
            hoverForced: true,
          }}
        >
          <IconButton
            onClick={onCopy}
            size="small"
            sx={{
              width: 36,
              height: 36,
            }}
          >
            <Icon uiType={'icon_copy'} width={24} color={theme.palette.text.disabled} />
          </IconButton>
        </BoxWithHoc>
      ) : (
        <IconButton
          onClick={() => {
            onClick?.();
          }}
          size="small"
          sx={{
            width: 24,
            height: 24,
          }}
        >
          <IconMaterial uiType={'icon_close'} />
        </IconButton>
      )}
    </PaperBox>
  );
};
