import React from 'react';
import Grid, { GridHeaderRow, GridHeaderCell, GridRow, GridCell, GridFooterCell, GridFooterRow } from './components/grid/Grid';
import Items from './mocks/mockItems';

const App = () => (
  <div className="old-paper"style={{width: '50%'}}>
    <Grid backgroundColor="rgba(12,0,0,.5)" color="white" borderTop>
      <GridHeaderRow>
        <GridHeaderCell>Weapon</GridHeaderCell>
        <GridHeaderCell align="right">Weight</GridHeaderCell>
        <GridHeaderCell align="right">Value</GridHeaderCell>
      </GridHeaderRow>
        {Items.map(i => (
          <GridRow key={i.name}>
            <GridCell>{i.name}</GridCell>
            <GridCell align="right">{i.weight}</GridCell>
            <GridCell align="right">{i.value}</GridCell>
          </GridRow>
        ))}
    </Grid>
  </div>
);

export default App;