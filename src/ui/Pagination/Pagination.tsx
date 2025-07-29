import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { Pagination as PaginationMui } from '@mui/material';

import { StyledPaginationBox } from './Pagination.styled.ts';

export interface PaginationProps {
  disabled?: boolean;
  count?: number | null;
  page?: number | null;
  onSetPage?: (page: number) => void;
}

const COUNT = 1;

const PAGE = 1;

export const Pagination: FC<PaginationProps> = (props) => {
  const { disabled, page, count, onSetPage } = props;

  const [countState, setCountState] = useState<number>(COUNT);

  const [pageState, setPageState] = useState<number>(PAGE);

  useEffect(() => {
    if (!page) {
      return;
    }

    setPageState(page);
  }, [page]);

  useEffect(() => {
    if (!count) {
      return;
    }

    setCountState(count);
  }, [count]);

  useEffect(() => {
    if (!count || !page) {
      return;
    }

    if (page > count) {
      setPageState(count);

      if (!onSetPage) {
        return;
      }

      onSetPage(count);
    }
  }, [count, page, onSetPage]);

  const onChangePage = (_: ChangeEvent<unknown>, newPage: number) => {
    setPageState(newPage);

    if (!onSetPage) {
      return;
    }

    onSetPage(newPage);
  };

  return (
    <StyledPaginationBox>
      <PaginationMui
        disabled={disabled}
        size={'small'}
        defaultPage={1}
        siblingCount={2}
        boundaryCount={1}
        onChange={onChangePage}
        count={countState}
        page={pageState}
        showLastButton
        showFirstButton
        shape="rounded"
      />
    </StyledPaginationBox>
  );
};
