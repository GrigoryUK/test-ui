import React, { ComponentType, FC, MutableRefObject, ReactNode, useEffect, useMemo, useRef, useState } from 'react';

import { Box, Fade, Tooltip as TooltipMui, TooltipProps as TooltipPropsMui } from '@mui/material';
import { Property } from 'csstype';

import { AnimationType, TimeoutProps } from '../../types';
import { TextUtils } from '../../utils';

interface TooltipProps {
  content?: ReactNode;
  tooltipProps?: TooltipProps;
  pointerEvents?: Property.PointerEvents;
  extraOffset?: number;
  disabled?: boolean;
  maxWidth?: number | string;
  timeoutAnimation?: keyof typeof AnimationType;
  placement?: TooltipPropsMui['placement'];
  offset?: number[];
  scrollRef?: MutableRefObject<HTMLDivElement>;
  hoverForced?: boolean;
  open?: boolean;
  disablePortal?: boolean;
  font?: string;
  customTimeout?: TimeoutProps;
  isClosingElement?: boolean;
}

export interface ItemWithTooltipProps {
  itemWithTooltipProps?: TooltipProps;
}

const DEFAULT_FONT = '16px Manrope';

const MIN_TIMEOUT = 0;

const DEFAULT_TIMEOUT = 200;

const DEFAULT_OFFSET_TEXT = 20;

const DEFAULT_OFFSET_TOOLTIP = [0, -8];

const DEFAULT_MAX_WIDTH = 400;

export const ItemWithTooltip = <P extends object>(WrappedComponent: ComponentType<P & ItemWithTooltipProps>) => {
  const HocItemWithTooltip: FC<P & ItemWithTooltipProps> = ({ itemWithTooltipProps, ...props }) => {
    const [open, setOpen] = useState<boolean>(false);

    const wrappedComponentRef = useRef<HTMLDivElement>(null);

    const currentOffset = itemWithTooltipProps?.extraOffset ?? DEFAULT_OFFSET_TEXT;

    const contentRef = useRef<HTMLDivElement>(null);

    const title = itemWithTooltipProps?.content || (props as any)?.children;

    const onOpenHandler = () => {
      if (itemWithTooltipProps?.disabled) {
        return;
      }

      if (itemWithTooltipProps?.hoverForced && title) {
        setOpen(true);

        return;
      }

      const wrappedComponentWidth = wrappedComponentRef.current ? wrappedComponentRef.current.offsetWidth : 0;

      const contentWidth = contentRef?.current ? contentRef?.current?.offsetWidth : 0;

      if (title === null) {
        setOpen(false);

        return;
      }

      switch (typeof title) {
        case 'object': {
          setOpen(false);
          break;
        }
        case 'string': {
          const textWidth = TextUtils.getWidth(title, itemWithTooltipProps?.font ?? DEFAULT_FONT);
          setOpen(Boolean(wrappedComponentWidth < textWidth + currentOffset));
          break;
        }
        case 'number': {
          const textWidth = TextUtils.getWidth(title.toString(), itemWithTooltipProps?.font ?? DEFAULT_FONT);
          setOpen(Boolean(wrappedComponentWidth < textWidth + currentOffset));
          break;
        }
        default: {
          setOpen(Boolean(wrappedComponentWidth < contentWidth + currentOffset));
          break;
        }
      }
    };

    const onCloseHandler = () => {
      setOpen(false);
    };

    useEffect(() => {
      document.addEventListener('scroll', () => onCloseHandler);

      return () => {
        document.removeEventListener('scroll', () => onCloseHandler);
      };
    }, []);

    const observerScrollContent = itemWithTooltipProps?.scrollRef && itemWithTooltipProps?.scrollRef?.current;

    useEffect(() => {
      if (observerScrollContent) {
        observerScrollContent.addEventListener('scroll', () => {
          onCloseHandler();
        });
      }

      return () => {
        if (observerScrollContent) {
          observerScrollContent.removeEventListener('scroll', () => onCloseHandler);
        }
      };
    }, [observerScrollContent]);

    const timeout: TimeoutProps = useMemo(() => {
      switch (itemWithTooltipProps?.timeoutAnimation) {
        case AnimationType.normal:
          return DEFAULT_TIMEOUT;
        case AnimationType.no_opening_animation:
          return {
            appear: MIN_TIMEOUT,
            enter: MIN_TIMEOUT,
            exit: DEFAULT_TIMEOUT,
          };
        case AnimationType.none:
          return MIN_TIMEOUT;
        case AnimationType.no_closing_animation:
        default:
          return {
            appear: DEFAULT_TIMEOUT,
            enter: DEFAULT_TIMEOUT,
            exit: MIN_TIMEOUT,
          };
      }
    }, [itemWithTooltipProps?.timeoutAnimation]);

    return (
      <TooltipMui
        onOpen={onOpenHandler}
        onClose={onCloseHandler}
        onMouseLeave={onCloseHandler}
        title={title}
        arrow={true}
        TransitionProps={{ timeout: itemWithTooltipProps?.customTimeout ?? timeout }}
        TransitionComponent={Fade}
        slotProps={{
          tooltip: {
            sx: {
              maxWidth: itemWithTooltipProps?.maxWidth ?? DEFAULT_MAX_WIDTH,
            },
          },
          popper: {
            sx: {
              pointerEvents: itemWithTooltipProps?.pointerEvents ?? 'none',
            },
            disablePortal: itemWithTooltipProps?.disablePortal ?? false,
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: itemWithTooltipProps?.offset ?? DEFAULT_OFFSET_TOOLTIP,
                },
              },
            ],
          },
        }}
        open={itemWithTooltipProps?.open ?? open}
        placement={itemWithTooltipProps?.placement ?? 'top'}
        {...itemWithTooltipProps?.tooltipProps}
        content={''}
      >
        {itemWithTooltipProps?.isClosingElement ? (
          <WrappedComponent ref={wrappedComponentRef} {...(props as P)} />
        ) : (
          <WrappedComponent ref={wrappedComponentRef} {...(props as P)}>
            {(props as any)?.children}
            {React.isValidElement(itemWithTooltipProps?.isClosingElement) && (
              <Box
                sx={{
                  opacity: 0,
                  position: 'absolute',
                  visibility: 'hidden',
                }}
                ref={contentRef}
              >
                {itemWithTooltipProps?.content}
              </Box>
            )}
          </WrappedComponent>
        )}
      </TooltipMui>
    );
  };

  return HocItemWithTooltip;
};
