import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import './Users.css';

const Users = (props) => {
  const { users } = props;
  return (
    <div className="Users">
      <Table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>
                <img src={user.avatarUrl} alt="cover user" width="64" />
              </td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;

Users.propTypes = {
  /** Shape of users */
  books: PropTypes.arrayOf(
    PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
