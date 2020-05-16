import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const UpdateForm = (props) => {
  const { user } = props;
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input type="name" name="name" id="name" value={user.name} disabled />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone:</Label>
        <Input
          type="phone"
          name="phone"
          id="phone"
          value={user.phone}
          disabled
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={user.email}
          disabled
        />
      </FormGroup>
      <Button color="success">Update</Button>
    </Form>
  );
};

export default UpdateForm;

UpdateForm.defaultProps = {
  name: 'name',
  phone: 'phone',
  email: 'email',
};

UpdateForm.propTypes = {
  /** Shape of user */
  user: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }),
};
