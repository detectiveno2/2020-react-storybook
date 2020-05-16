import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { withInfo } from '@storybook/addon-info';

import ShopCard from '../components/ShopCard';

export default { title: 'Card', decorators: [withInfo] };

export const shopCard = (props) => {
  return <ShopCard title="Users's shop" />;
};
