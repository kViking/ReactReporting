import React from 'react';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default class AddItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e){
    e.preventDefault();
    this.props.handleClose(this.state.name);
    this.setState({name: ''})
  }

  handleChange(e){
    this.setState({name: e.target.value});
  }

  render(){
    return (
      <div>
        <Dialog open={this.props.open} onClose={this.handleClose}>
          <DialogTitle>Add an item</DialogTitle>
          <DialogContent>
            <DialogContentText>Add an item to the potluck</DialogContentText>
            <form onSubmit={this.handleClose}>
              <Input
                autoFocus
                margin='none'
                id='name'
                label='name'
                type='text'
                onChange={this.handleChange}
                value={this.state.name}
              />
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button type='submit'>Add</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}