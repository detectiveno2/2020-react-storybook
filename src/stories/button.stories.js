import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { withInfo } from '@storybook/addon-info';

import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import ActionButton from '../components/ActionButton';
import OutlineActionButton from '../components/OutlineActionButton';
import ActionButtonGroup from '../components/ActionButtonGroup';

export default { title: 'Button', decorators: [withInfo] };

export const loginButton = (props) => {
  return <LoginButton color="success">Login</LoginButton>;
};

export const signupButton = (props) => {
  return (
    <SignupButton outline color="success">
      Signup
    </SignupButton>
  );
};

export const actionButton = (props) => {
  return <ActionButton>Any action</ActionButton>;
};

export const outlineActionButton = (props) => {
  return <OutlineActionButton>Any action</OutlineActionButton>;
};

export const actionButtonGroup = (props) => {
  return <ActionButtonGroup contentOne="User" contentTwo="Signout" />;
};
