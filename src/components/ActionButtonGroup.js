import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';

const ActionButtonGroup = (props) => {
  const { colorOne, colorTwo, contentOne, contentTwo } = props;
  return (
    <ButtonGroup>
      <Button color={colorOne}>{contentOne}</Button>
      <Button color={colorTwo}>{contentTwo}</Button>
    </ButtonGroup>
  );
};

export default ActionButtonGroup;

ActionButtonGroup.defaultProps = {
  colorOne: 'primary',
  colorTwo: 'danger',
};

ActionButtonGroup.propTypes = {
  /** Default color is success on bs4 */
  colorOne: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
  ]),
  /** Default color is danger on bs4 */
  colorTwo: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
  ]),
  /** Content in button is required */
  contentOne: PropTypes.string.isRequired,
  /** Content in button is required */
  contentTwo: PropTypes.string.isRequired,
};
