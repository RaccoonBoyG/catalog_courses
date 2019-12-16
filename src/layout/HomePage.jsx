import React from 'react';
import { Grid, Container, TextField, IconButton, InputBase, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
    // backgroundColor: theme.palette.background.default,
    background: '#e0e5ec url(https://priem.urfu.ru/static/img/main_img_1_1920_dc.c875ca9.jpg) no-repeat',
    backgroundSize: '1600px',
    backgroundPosition: 'calc(50% + 170px) 0',
  },
  grid: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(20),
    paddingTop: theme.spacing(30)
  },
  text: {
    marginBottom: theme.spacing(3),
  },
  title: {
    fontWeight: '600',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.content}>
        <Container className={classes.grid}>
          <Grid container item direction="column" justify="center" alignItems="flex-start" lg={4}>
            <Typography variant="h4" className={`${classes.text} ${classes.title}`}>
              Добро пожаловать в открытое образование!
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Начните обучение с поиска курса
            </Typography>
            <Paper component="form" className={classes.root}>
              <InputBase className={classes.input} placeholder="Что вы хотите изучать ?" inputProps={{ 'aria-label': 'Что вы хотите изучать ?' }} />
              <IconButton type="submit" className={classes.iconButton} aria-label="search" color="secondary">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default HomePage;
