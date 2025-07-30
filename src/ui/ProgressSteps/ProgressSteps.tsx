import React, { FC } from 'react';

import { Box } from '@mui/material';
import clsx from 'clsx';

import { ProgressStepsItem, ProgressStepsWrapper } from './ProgressSteps.styled';
import { Text } from '../Text';

export interface ProgressStepsItemProps {
  value: number;
  label: string;
}

export interface ProgressStepsProps {
  items: ProgressStepsItemProps[];
  activeStep: number;
  onStepClick: (value: number) => void;
  availableSteps?: number;
}

export const ProgressSteps: FC<ProgressStepsProps> = (props) => {
  const { activeStep, onStepClick, availableSteps, items } = props;

  const maxAllowedStep = Math.max(activeStep, availableSteps ?? activeStep);

  return (
    <ProgressStepsWrapper>
      <Box display="flex" width={1} gap={0.3} position="relative">
        {items.map((step) => {
          const isFirst = step.value === 0;

          const isLast = step.value === items.length - 1;

          const isActive = step.value === activeStep - 1;

          const isPassed = step.value < maxAllowedStep;

          const isClickable = isPassed;

          return (
            <Box key={step.label} flex={1} position="relative">
              <ProgressStepsItem
                onClick={() => isClickable && onStepClick(step.value)}
                className={clsx('step-item', {
                  active: isActive,
                  passed: isPassed,
                  clickable: isClickable,
                  'radius-left': isFirst,
                  'radius-right': isLast,
                })}
              />
              <Box
                className={clsx('step-label-container', {
                  clickable: isClickable,
                })}
                onClick={() => isClickable && onStepClick(step.value)}
              >
                <Text
                  className={clsx('step-label', {
                    active: isActive,
                    passed: isPassed,
                  })}
                  uiType={'text_12_400_primary_087'}
                  variant="caption"
                >
                  {step.label}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </ProgressStepsWrapper>
  );
};
