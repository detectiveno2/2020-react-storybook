import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const SignupForm = (props) => {
  const {
    namePlaceholder,
    phonePlaceholder,
    emailPlaceholder,
    passwordPlaceholder,
  } = props;
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input
          type="name"
          name="name"
          id="name"
          placeholder={namePlaceholder}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone:</Label>
        <Input
          type="phone"
          name="phone"
          id="phone"
          placeholder={phonePlaceholder}
        />
      </FormGroup>
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
      <FormGroup>
        <Label for="avatar">Avatar:</Label>
        <Input type="file" name="avatar" id="avatar" />
      </FormGroup>
      <Button color="success">Signup</Button>
    </Form>
  );
};

export default SignupForm;

SignupForm.defaultProps = {
  namePlaceholder: 'name',
  phonePlaceholder: 'phone',
  emailPlaceholder: 'email',
  passwordPlaceholder: 'password',
};

SignupForm.propTypes = {
  /** Placeholder for name */
  namePlaceholder: PropTypes.string,
  /** Placeholder for phone */
  phonePlaceholder: PropTypes.string,
  /** Placeholder for email */
  emailPlaceholder: PropTypes.string,
  /** Placeholder for password */
  passwordPlaceholder: PropTypes.string,
};
