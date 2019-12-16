import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(1)
  }
}));

const SiginIn = () => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.root}>
        Войти
      </Button>
      <Button variant="contained" color="primary" className={classes.root}>
        Регистрация
      </Button>
    </div>
  );
};

export default SiginIn;
