import React from 'react';
import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = (props) => {
  const { books } = props;
  return (
    <div className="Cart">
      <Table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td>
                <img src={book.cover} alt="cover book" width="64" />
              </td>
              <td>{book.title}</td>
              <td>{book.description}</td>
              <td>
                <Button outline color="danger">
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  /** Shape of books */
  books: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
