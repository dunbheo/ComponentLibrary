import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Grid

const Grid = ({ children, backgroundColor, ...rest }) => {
const Table = styled.table`
border-collapse: collapse;
background-color: ${backgroundColor};
`;

 return (
  <Table>
      <tbody>
        {React.Children.map(children, (child => React.cloneElement(child, {...rest})))}
      </tbody>
    </Table>
 );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
};

// GridHeaderRow
export const GridHeaderRow = ({ children }) => (
    <tr>{children}</tr>
);

GridHeaderRow.propTypes = {
  children: PropTypes.node.isRequired,
};

// GridHeaderCell
export const GridHeaderCell = ({ children }) => (
  <th>{children}</th>
);

GridHeaderCell.propTypes = {
  children: PropTypes.node.isRequired,
};

// GridRow
export const GridRow = ({ children, ...rest }) => (
  <tr>{React.Children.map(children, (child => React.cloneElement(child, {...rest})))}</tr>
);

GridRow.propTypes = {
  children: PropTypes.node.isRequired,
};

// GridCell

export const GridCell = ({ children, borderTop }) => {
const Td = styled.td`
border-top: ${borderTop && '1px solid gray'};
`;

 return <Td>{children}</Td>
};

GridCell.propTypes = {
  children: PropTypes.node.isRequired,
  borderTop: PropTypes.bool,
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