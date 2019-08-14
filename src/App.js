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
          <GridCell key={i.name}>{i.name}</GridCell>
          <GridCell key={i.weight}>{i.weight}</GridCell>
          <GridCell key={i.value}>{i.value}</GridCell>
        </GridRow>
      ))}
  </Grid>
);

export default App;