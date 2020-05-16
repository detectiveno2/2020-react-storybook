import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const SignupButton = (props) => {
  const { color, children } = props;
  return (
    <Button outline color={color} className="col-6">
      {children}
    </Button>
  );
};

export default SignupButton;

SignupButton.defaultProps = {
  color: 'success',
  children: 'Signup',
};

SignupButton.propTypes = {
  /** Default color is success on bs4 */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
  ]),
  /** Content in button */
  children: PropTypes.string,
};
