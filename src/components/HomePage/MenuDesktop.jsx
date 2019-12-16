import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomePage from '../../layout/HomePage';

const drawerWidth = 340;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  brandImg: {
      width: "125px",
      padding: theme.spacing(4),
  },
  list_text: {
    textAlign: 'center',
  }
}));

const MenuDesktop = () => {
  const classes = useStyles();
//   const useFetching = () => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//       dispatch(fetchUserState());
//     }, [dispatch]);
//   };
//   useFetching();

  return (
    <div className={classes.root}>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.brandImg}>
              <img src="https://openedu.urfu.ru/files/courses_catalog/logo_urfu.svg" alt="logo" className={classes.img}/>
        </div>
        <List>
            <ListItem button alignItems="center">
              <ListItemText primary="Test" className={classes.list_text} />
            </ListItem>
            <ListItem button alignItems="center">
              <ListItemText primary="Test" className={classes.list_text} />
            </ListItem>
        </List>
      </Drawer>
      <HomePage />
    </div>
  );
};

export default MenuDesktop;
