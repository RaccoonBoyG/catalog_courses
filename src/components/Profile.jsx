import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
// import { fetchUserState } from '../store/user/action.js';

const useStyles = makeStyles(theme => ({
  root: {
    outline: 'none'
  },
  menu: {
    maxWidth: '100%'
  },
  papper: {
    // padding: theme.spacing(4),
    outline: 'none'
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  divider: {
    width: '100%',
    marginBottom: '1em',
    marginTop: '1em'
  }
}));

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const isAuth = useSelector(state => state.user.isAuth);
  // const user = useSelector(state => state.)
  console.log(isAuth);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className={classes.root}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.root} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}
        className={(classes.menu, classes.root)}
      >
        <Grid container direction="column" className={classes.papper} justify="center" alignItems="center">
          {/* <List component="nav" className={classes.papper}  aria-label="mailbox folders"> */}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
          <div style={{marginBottom: '2rem'}}>
            <Typography variant="subtitle1" align="center">
              Remy Sharp
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary">
              af.galimzianov@urfu.ru
            </Typography>
          </div>
          <MenuItem onClick={handleClose}>Профиль</MenuItem>
          <MenuItem onClick={handleClose}>Настройки</MenuItem>
          <MenuItem onClick={handleClose}>Выйти</MenuItem>
          {/* </List> */}
        </Grid>
      </Menu>
    </div>
  );
};

// const withEither = (conditionalRenderingFn, EitherComponent) => Component => props =>
//   {

//    return conditionalRenderingFn(props) ? (
//     <>
//       {/* <Header /> */}
//       <EitherComponent {...props}
//       />
//     </>
//   ) : (
//     <>
//       {/* <Header /> */}
//       <Component {...props}
//       />
//     </>
//   )};
// const isViewConditionFn = props => props.modes_data === undefined;
// const withEditContionalRendering = withEither(isViewConditionFn, HeaderTitleProgram);
// const AboutRender = withEditContionalRendering(HeaderTitle);

export default Profile;
