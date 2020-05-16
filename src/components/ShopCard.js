import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const ShopCard = (props) => {
  const { title, description, action } = props;
  return (
    <div className="ShopCard">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h2>{title}</h2>
          </CardTitle>
          <CardText>{description}</CardText>
          <Button color="primary">{action}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ShopCard;

ShopCard.defaultProps = {
  description: 'A beautiful shop with some good books.',
  action: 'visit',
};

ShopCard.propTypes = {
  /** title of shop is required */
  title: PropTypes.string.isRequired,
  /** description of shop */
  description: PropTypes.string,
  /** action in button */
  action: PropTypes.string,
};
