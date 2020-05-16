import React from 'react';
import { Badge, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import './TransactionsList.css';

const TransactionsList = (props) => {
  const { list } = props;
  return (
    <div className="TransactionsList">
      <ul>
        {list.map((item) => {
          if (item.isComplete) {
            return (
              <li>
                {item.title} &nbsp;
                <Badge color="success">Complete!</Badge>
              </li>
            );
          } else {
            return (
              <li>
                {item.title} &nbsp;
                <Button color="primary" size="sm">
                  Done
                </Button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default TransactionsList;

TransactionsList.propTypes = {
  /** Data of transactions */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ),
};
