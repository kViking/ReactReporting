import React from 'react';
import Grid from '@material-ui/core/Grid';
import firebase from './firebase';
import ItemAccordion from './ItemAccordion';

  
class FoodList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: null,
    }
  }

  componentDidMount(){
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      Object.keys(items).forEach(item => {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      });
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
      <div>
        <Grid
          container
          spacing={24}
          style={{padding: 24}}
        >
          {this.state.items.map(item => {
            return <ItemAccordion key={item.id} item={item} style={{width: '100%'}} />
          })}
        </Grid>
      </div>
    );
  }
}

export default FoodList;