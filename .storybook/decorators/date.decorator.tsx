import React, { ReactNode } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { ru } from 'date-fns/locale';

export const onGetDateDecorator = () => {
  return (Story: () => ReactNode) => (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <Story />
    </LocalizationProvider>
  );
};
