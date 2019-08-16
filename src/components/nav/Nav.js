import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = ({ children }) => {
  const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgba(12,0,0,.5);
  border-bottom: 1px solid white;
  `;
 
  return <Ul>{children}</Ul>
};

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export const NavItem = ({ children }) => {
  const Li = styled.li`
  float: left;
  padding: 8px 16px 8px 16px;
  color: white;
  font-size: 24px
  `;
 
  return <Li>{children}</Li>
}

NavItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Nav;