import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const LoginButton = (props) => {
  const { color, children } = props;
  return (
    <Button color={color} className="col-6">
      {children}
    </Button>
  );
};

export default LoginButton;

LoginButton.defaultProps = {
  color: 'success',
  children: 'Login',
};

LoginButton.propTypes = {
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
  /** Require content in button */
  children: PropTypes.string,
};
