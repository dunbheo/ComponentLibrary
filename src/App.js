import React from 'react';
import Grid, { GridHeaderRow, GridHeaderCell, GridRow, GridCell, GridFooterCell, GridFooterRow } from './components/grid/Grid';

const App = () => (
  <Grid>
    <GridHeaderRow>
      <GridHeaderCell>Heading 1</GridHeaderCell>
      <GridHeaderCell>Heading 2</GridHeaderCell>
      <GridHeaderCell>Heading 3</GridHeaderCell>
    </GridHeaderRow>
    <GridRow>
      <GridCell>11</GridCell>
      <GridCell>12</GridCell>
      <GridCell>13</GridCell>
    </GridRow>
    <GridRow>
      <GridCell>21</GridCell>
      <GridCell>22</GridCell>
      <GridCell>23</GridCell>
    </GridRow>
    <GridRow>
      <GridCell>21</GridCell>
      <GridCell>22</GridCell>
      <GridCell>23</GridCell>
    </GridRow>
    <GridFooterRow>
      <GridFooterCell>Foot 1</GridFooterCell>
      <GridFooterCell>Foot 2</GridFooterCell>
      <GridFooterCell>Foot 3</GridFooterCell>
    </GridFooterRow>
  </Grid>
);

export default App;