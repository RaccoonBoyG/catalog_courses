import React, { useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Profile from './Profile';
import { useDispatch } from 'react-redux';
import { fetchUserState } from '../store/user/action.js';
import SiginIn from './SiginIn';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

const drawerWidth = 340;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(4)
  },
  img: {
    width: '120px',
  },
  appbarBackground: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary
  }
}));

const Header = () => {
  const classes = useStyles();
  const useFetching = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUserState());
    }, [dispatch]);
  };
  useFetching();

  return (
    <div className={classes.root}>
      {/* <HideOnScroll> */}
        {/* <AppBar className={classes.appbarBackground}> */}
          <Toolbar>
            <p className={classes.title}></p>
            <SiginIn />
            <Profile />
          </Toolbar>
        {/* </AppBar> */}
      {/* </HideOnScroll> */}
    </div>
  );
};

export default Header;
