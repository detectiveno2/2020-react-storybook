import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';

const LibraryNavbar = (props) => {
  const { options } = props;
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className="Navbar">
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">
          LibraryManager
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {options.map((option) => (
              <NavItem>
                <NavLink href={option.link}>{option.title}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default LibraryNavbar;

LibraryNavbar.propTypes = {
  /** Shape of options */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
