import React, { useCallback, useEffect, useState } from 'react';
import { Toolbar, Tooltip, Grid, InputBase } from '@material-ui/core';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  MaterialAppBar,
  ContainerTitle,
  useStyles,
  MaterialTypography,
  MaterialShoppingCartIcon,
  MaterialPersonIcon,
  MaterialAccountCircleIcon,
  MaterialSearchIcon,
  ReactLink as Link,
  ReactUserLink,
} from './styles';

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [navbarActive, setNavbarActive] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const { user } = useAuth();
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [style, animate] = useSpring(() => ({
    opacity: 1,
    y: 0,
    height: 100,
    easing: 'ease',
  }));

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  useEffect(() => {
    const handleNavBarActive = (): void => {
      if (window.scrollY >= 110) {
        setTimeout(setNavbarActive(true), 1000);
      } else {
        setTimeout(setNavbarActive(false), 1000);
      }
    };

    window.addEventListener('scroll', handleNavBarActive);

    return () => {
      window.removeEventListener('scroll', handleNavBarActive);
    };
  }, []);

  useEffect(() => {
    if (navbarActive) {
      animate({
        opacity: 0.5,
        y: -200,
        // height: 80,
        config: { duration: 600 },
      });

      animate({ opacity: 1, y: 0, delay: 500, config: { duration: 700 } });
    } else {
      animate({ height: 100 });
    }
  }, [navbarActive, animate]);

  useEffect(() => {
    if (!user) {
      setIsUserLogged(false);
    } else {
      setIsUserLogged(true);
    }
  }, [user]);

  const handleNavbarClasses = useCallback(() => {
    if (isHome) {
      return navbarActive ? 'isHome active' : 'isHome';
    }
    return navbarActive ? 'active' : '';
  }, [isHome, navbarActive]);

  return (
    <MaterialAppBar style={style} className={handleNavbarClasses()}>
      <Toolbar>
        <Grid container xs={7} className={classes.NavbarGridLeft}>
          <ContainerTitle>
            <Link to="/">
              <MaterialTypography variant="h4">
                Recursion Store
              </MaterialTypography>
              <MaterialTypography variant="h6">
                You have never seen a store like this!
              </MaterialTypography>
            </Link>
          </ContainerTitle>
        </Grid>
        <Grid container xs={12} className={classes.NavbarGridCenter}>
          <Link to="/products/women">Women</Link>
          <Link to="/products/men">Men</Link>
          <Link to="/products/kids">Kids</Link>
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
            <ReactUserLink to="/user/myaccount" className="user-icon">
              {isUserLogged ? (
                <>
                  <MaterialAccountCircleIcon />
                  {/* <span>Welcome, {user.firstName}</span> */}
                </>
              ) : (
                  <MaterialPersonIcon />
                )}
            </ReactUserLink>
          </Tooltip>
        </Grid>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default Navbar;
