import React, { FC } from 'react';

import { Box } from '@mui/material';

import { CostInfo, CostInfoProps } from '../CostInfo';
import { Loader } from '../Loader';
import { PaperBox } from '../PaperBox';
import { Text } from '../Text';
import { OptionItemProps } from '../../types';

export interface InfoPlateItemProps extends Pick<OptionItemProps, 'value'> {
  description: string;
  currency?: string;
  withTooltip?: boolean;
  tooltipProps?: CostInfoProps;
  isLoading?: boolean;
}

export interface InfoPlateProps {
  items: InfoPlateItemProps[];
  withoutSticky?: boolean;
  maxWidth?: number | string;
}

export const InfoPlate: FC<InfoPlateProps> = (props) => {
  const { items, withoutSticky, maxWidth } = props;

  return (
    <Box>
      <Box position={withoutSticky ? 'static' : 'sticky'} top={withoutSticky ? 0 : 16}>
        <PaperBox
          maxWidth={maxWidth ?? '100%'}
          padding={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: 215,
            bgcolor: (theme) => theme.palette.grey['100'],
            gap: 2.7,
          }}
        >
          {items.map((info: InfoPlateItemProps, idx) => (
            <Box key={idx} display={'flex'} flexDirection={'column'} gap={1}>
              <Box display={'flex'} alignItems={'center'} gap={0.5}>
                {info.isLoading ? (
                  <Loader
                    boxProps={{
                      alignItems: 'flex-start',
                    }}
                    height={'auto'}
                    uiType={'circle'}
                    size={21}
                  />
                ) : (
                  <>
                    <Box display={'flex'}>
                      <Text
                        uiType={'subtitle_16_600_primary_087'}
                      >{`${info.value} ${info.currency ? info.currency : ''}`}</Text>
                    </Box>
                    {info.withTooltip && <CostInfo {...info.tooltipProps} />}
                  </>
                )}
              </Box>
              <Box>
                <Text uiType={'text_12_400_primary_06'}>{info.description}</Text>
              </Box>
            </Box>
          ))}
        </PaperBox>
      </Box>
    </Box>
  );
};
