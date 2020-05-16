import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { withInfo } from '@storybook/addon-info';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import UpdateForm from '../components/UpdateForm';

export default { title: 'Form', decorators: [withInfo] };

export const loginForm = (props) => {
  return <LoginForm emailPlaceholder="abc@example.com" />;
};

export const signupForm = (props) => {
  return <SignupForm emailPlaceholder="abc@example.com" />;
};

export const updateForm = (props) => {
  return (
    <UpdateForm
      user={{
        name: 'User name',
        phone: 'User phone',
        email: 'User email',
      }}
    />
  );
};
