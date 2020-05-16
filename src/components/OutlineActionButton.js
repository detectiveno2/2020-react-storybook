import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const OutlineActionButton = (props) => {
  const { color, children } = props;
  return (
    <Button outline color={color}>
      {children}
    </Button>
  );
};

export default OutlineActionButton;

OutlineActionButton.defaultProps = {
  color: 'primary',
};

OutlineActionButton.propTypes = {
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
