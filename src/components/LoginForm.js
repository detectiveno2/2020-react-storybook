import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  const { emailPlaceholder, passwordPlaceholder } = props;
  return (
    <Form>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder={emailPlaceholder}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password:</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder={passwordPlaceholder}
        />
      </FormGroup>
      <Button color="success">Login</Button>
    </Form>
  );
};

export default LoginForm;

LoginForm.defaultProps = {
  emailPlaceholder: 'email',
  passwordPlaceholder: 'password',
};

LoginForm.propTypes = {
  /** Placeholder for email */
  emailPlaceholder: PropTypes.string,
  /** Placeholder for password */
  passwordPlaceholder: PropTypes.string,
};
