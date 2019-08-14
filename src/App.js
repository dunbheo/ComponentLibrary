import React from 'react';
import Grid, { GridHeaderRow, GridHeaderCell, GridRow, GridCell, GridFooterCell, GridFooterRow } from './components/grid/Grid';
import Items from './mocks/mockItems';

const App = () => (
  <Grid backgroundColor="red" borderTop>
    <GridHeaderRow>
      <GridHeaderCell>Weapon</GridHeaderCell>
      <GridHeaderCell>Weight</GridHeaderCell>
      <GridHeaderCell>Value</GridHeaderCell>
    </GridHeaderRow>
      {Items.map(i => (
        <GridRow key={i.name}>
          <GridCell>{i.name}</GridCell>
          <GridCell>{i.weight}</GridCell>
          <GridCell>{i.value}</GridCell>
        </GridRow>
      ))}
  </Grid>
);

export default App;