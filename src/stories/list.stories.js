import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { withInfo } from '@storybook/addon-info';

import TransactionsList from '../components/TransactionsList';

export default { title: 'List', decorators: [withInfo] };

export const transactionsList = (props) => {
  return (
    <TransactionsList
      list={[
        {
          title: 'User A hired ABC book',
          isComplete: true,
        },
        {
          title: 'User B hired DEF book',
          isComplete: false,
        },
      ]}
    />
  );
};
