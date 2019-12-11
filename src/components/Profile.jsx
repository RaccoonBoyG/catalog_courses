import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useSelector } from 'react-redux';
// import { fetchUserState } from '../store/user/action.js';

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
  console.log(isAuth);
  return (
    <div>
      <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
        <AccountCircle />
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
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
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
