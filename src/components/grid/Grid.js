import React from 'react';
import PropTypes from 'prop-types';

// Grid
const Grid = ({ children }) => (
  <table>
    <tbody>
      {children}
    </tbody>
  </table>
);

Grid.propTypes = {
  children: PropTypes.element.isRequired,
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
  <td>{children}</td>
);

GridHeaderCell.propTypes = {
  children: PropTypes.element.isRequired,
};

// GridRow
export const GridRow = ({ children }) => (
  <tr>{children}</tr>
);

GridRow.propTypes = {
  children: PropTypes.element.isRequired,
};

// GridCell
export const GridCell = ({ children }) => (
  <td>{children}</td>
);

GridCell.propTypes = {
  children: PropTypes.element.isRequired,
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