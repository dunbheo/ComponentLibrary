import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Grid

const Grid = ({ children, backgroundColor, color, ...rest }) => {
const Table = styled.table`
border-collapse: collapse;
background-color: ${backgroundColor};
color: ${color ? color : 'black'};
width: 100%;
`;

 return (
  <Table>
      <tbody>
        {React.Children.map(children, (child => React.cloneElement(child, {color, ...rest})))}
      </tbody>
    </Table>
 );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

// GridHeaderRow
export const GridHeaderRow = ({ children }) => (
  <tr>{children}</tr>
);

GridHeaderRow.propTypes = {
  children: PropTypes.node.isRequired,
};

// GridHeaderCell
export const GridHeaderCell = ({ children, align, width }) => {
  const Th = styled.th`
  text-align: ${align ? align : 'left'};
  padding: 8px 16px 8px 16px;
  width: ${width};
  `;
 
  return <Th>{children}</Th>;
};

GridHeaderCell.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  width: PropTypes.string,
};

// GridRow
export const GridRow = ({ children, ...rest }) => {
  const Tr = styled.tr`
  &:hover {
    background: rgba(12, 0, 0, .2);
  }
  `;
 return <Tr>{React.Children.map(children, (child => React.cloneElement(child, {...rest})))}</Tr>
};

GridRow.propTypes = {
  children: PropTypes.node.isRequired,
};

// GridCell

export const GridCell = ({ children, borderTop, color, align }) => {
const Td = styled.td`
border-top: ${borderTop && `1px solid ${color ? color : 'black'}`};
text-align: ${align ? align : 'left'};
padding: 8px 16px 8px 16px;
`;

 return <Td>{children}</Td>
};

GridCell.propTypes = {
  children: PropTypes.node.isRequired,
  borderTop: PropTypes.bool,
  align: PropTypes.string,
  color: PropTypes.string,
};

// GridFooterRow
  export const GridFooterRow = ({ children }) => (
<tr>{children}</tr>
);

GridFooterRow.propTypes = {
  children: PropTypes.node.isRequired,
};

// GridFooterCell
export const GridFooterCell = ({ children }) => (
  <td>{children}</td>
);

GridFooterCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;