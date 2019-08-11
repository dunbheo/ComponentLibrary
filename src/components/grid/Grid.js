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
        {children.map(child => React.cloneElement(child, {...rest}))}
      </tbody>
    </Table>
 );
};

Grid.propTypes = {
  children: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
};

// GridHeaderRow
export const GridHeaderRow = ({ children }) => (
    <tr>{children}</tr>
);

GridHeaderRow.propTypes = {
  children: PropTypes.element.isRequired,
};

// GridHeaderCell
export const GridHeaderCell = ({ children }) => (
  <th>{children}</th>
);

GridHeaderCell.propTypes = {
  children: PropTypes.element.isRequired,
};

// GridRow
export const GridRow = ({ children, ...rest }) => (
  <tr>{children.map(child => React.cloneElement(child, {...rest}))}</tr>
);

GridRow.propTypes = {
  children: PropTypes.element.isRequired,
};

// GridCell

export const GridCell = ({ children, borderTop }) => {
const Td = styled.td`
border-top: ${borderTop && '1px solid gray'};
`;

 return <Td>{children}</Td>
};

GridCell.propTypes = {
  children: PropTypes.element.isRequired,
  borderTop: PropTypes.string,
};

// GridFooterRow
  export const GridFooterRow = ({ children }) => (
<tr>{children}</tr>
);

GridFooterRow.propTypes = {
  children: PropTypes.element.isRequired,
};

// GridFooterCell
export const GridFooterCell = ({ children }) => (
  <td>{children}</td>
);

GridFooterCell.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Grid;