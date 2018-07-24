import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FoodList from './components/FoodList';
import Button from '../node_modules/@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {withStyles} from '@material-ui/core';
import AddItem from './components/AddItem';
import Menu from './components/Menu';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      user: null,
      adding: false,
      menu: false
    }

    this.openAdd = this.openAdd.bind(this);
    this.closeAdd = this.closeAdd.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({menu: !this.state.menu});
  }
  openAdd(){
    this.setState({adding: true});
  }

  closeAdd(e){
    // this.addItem(e);
    this.setState({adding: false});
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <NavBar menuHandler={this.toggleMenu} />
        <FoodList />
        <Button 
          variant='fab'
          color='primary'
          className={classes.fab}
          onClick={this.openAdd}
        >
          <AddIcon />
        </Button>
        <AddItem open={this.state.adding} handleClose={this.closeAdd}/>
        <Menu open={this.state.menu} handleClose={this.toggleMenu} />
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(App);
