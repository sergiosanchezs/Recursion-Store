import React from 'react';
import { Toolbar, Tooltip, Grid, InputBase } from '@material-ui/core';
import {
  MaterialAppBar,
  ContainerTitle,
  useStyles,
  MaterialTypography,
  MaterialShoppingCartIcon,
  MaterialPersonIcon,
  MaterialSearchIcon,
  ReactLink as Link,
} from './styles';

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <MaterialAppBar>
      <Toolbar>
        <Grid container xs={7} className={classes.NavbarGridLeft}>
          <ContainerTitle>
            <MaterialTypography variant="h4">
              <Link to="/">Recursion Store</Link>
            </MaterialTypography>
            <MaterialTypography variant="h6">
              You have never seen a store like this!
            </MaterialTypography>
          </ContainerTitle>
        </Grid>
        <Grid container xs={12} className={classes.NavbarGridCenter}>
          <Link to="/products">Women</Link>
          <Link to="/products">Men</Link>
          <Link to="/products">Kids</Link>
        </Grid>
        <Grid container xs={6} className={classes.NavbarGridRight}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <MaterialSearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Tooltip title="Cart" aria-label="cart">
            <Link to="/Cart">
              <MaterialShoppingCartIcon />
            </Link>
          </Tooltip>
          <Tooltip title="User" aria-label="user">
            <Link to="/user/myaccount">
              <MaterialPersonIcon />
            </Link>
          </Tooltip>
        </Grid>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default Navbar;