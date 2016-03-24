import React, { Component } from 'react';
import { render } from 'react-dom';

//Parent Component
class GroceryList extends Component {
  render() {
    return (
      <ul>
        <ListItem quantity = '1' name = 'Bread' />
        <ListItem quantity = '6' name = 'Eggs' />
        <ListItem quantity = '2' name = 'Milk' />
      </ul>
      );
  }
}

//Child Component
class ListItem extends Component {
  render () {
    return (
        <li>
          { this.props.quantity } x {this.props.name}
        </li>
      );
  }
}

render(<GroceryList />, document.getElementById('root'));

/* Notes:
- ListItem (which is child component) is reusable with different values of quantities and names.
- Child elements can be configured through "props": the properties owned and passed down by the parent component.
- No need to define props separately in the parent component.
