import React from 'react';
import Grid, { GridHeaderRow, GridHeaderCell, GridRow, GridCell } from './components/grid/Grid';
import Items from './mocks/mockItems';
import Nav, { NavItem } from './components/nav/Nav';

const App = () => (
  <div className="old-paper"style={{width: '50%'}}>
      <Nav>
        <NavItem key="1">Inventory</NavItem>
        <NavItem key="2">Shop</NavItem>
      </Nav>
      <Grid backgroundColor="rgba(12,0,0,.5)" color="white">
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