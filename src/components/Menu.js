import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';

const styles = {
  list: {
    width: 250,
  },
}

const Menu = props => {
  const classes = props;
  return (
    <Drawer 
      open={props.open} 
      onClose={props.handleClose}
      anchor='left'
    >
      <div className={classes.list}>
        <List >
          <ListItem button>
            <ListItemIcon><StarIcon/></ListItemIcon>
            <ListItemText>I work!</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon><StarIcon/></ListItemIcon>
            <ListItemText>I think?</ListItemText>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default withStyles(styles)(Menu);