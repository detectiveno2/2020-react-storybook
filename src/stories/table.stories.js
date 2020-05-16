import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { withInfo } from '@storybook/addon-info';

import Cart from '../components/Cart';
import Users from '../components/Users';

export default { title: 'Table', decorators: [withInfo] };

export const cart = (props) => {
  return (
    <Cart
      books={[
        {
          cover: 'https://loremflickr.com/240/240',
          title: 'Title of book',
          description: 'lorem lorem lorem lorem lorem',
        },
      ]}
    />
  );
};

export const users = (props) => {
  return (
    <Users
      users={[
        {
          avatarUrl: 'https://loremflickr.com/240/240',
          name: 'user name',
          phone: '0394829485',
          email: 'abc@example.com',
        },
      ]}
    />
  );
};
