import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const NavBar = props => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton 
            onClick={props.menuHandler}
            color='inherit'
            className={classes.menuButton}
          ><MenuIcon /></IconButton>
          <Typography vatiant='title' color='inherit' className={classes.flex}>
            20th Ave LID
          </Typography>
          <Button color='inherit'>{props.user ? 'Logout' : 'Login'}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);