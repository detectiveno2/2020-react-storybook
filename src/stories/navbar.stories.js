import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { withInfo } from '@storybook/addon-info';

import LibraryNavbar from '../components/LibraryNavbar';

export default { title: 'Navbar', decorators: [withInfo] };

export const libraryNavbar = (props) => {
  return (
    <LibraryNavbar
      options={[
        {
          title: 'Home',
          link: '#',
        },
        {
          title: 'About',
          link: '#',
        },
        {
          title: 'Contact',
          link: '#',
        },
      ]}
    />
  );
};
