import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const ActionButton = (props) => {
  const { color, children } = props;
  return <Button color={color}>{children}</Button>;
};

export default ActionButton;

ActionButton.defaultProps = {
  color: 'primary',
};

ActionButton.propTypes = {
  /** Default color is primary on bs4 */
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
  children: PropTypes.string.isRequired,
};
