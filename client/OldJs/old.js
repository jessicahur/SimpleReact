/**********************************
*          Hello World            *
**********************************/

import React, { Component} from 'react';
import { render } from 'react-dom'; //Need this because React.render is deprecated

class Hello extends Component {
  render() {
    var place = 'World';
    return (
      <h1>Hello {place}</h1>
    );
  }
}

render(<Hello />, document.getElementById('root'));

/*********************************
*     Parent - Child Components  *
*********************************/

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
*/

//Parent Component
class GroceryList extends Component {
  render() {
    return (
      <ul>
        <ListItem quantity = '1'>Bread</ListItem>
        <ListItem quantity = '6'>Eggs</ListItem>
        <ListItem quantity = '2'>Milk</ListItem>
      </ul>
      );
  }
}

//Child Component
class ListItem extends Component {
  render () {
    return (
        <li>
          { this.props.quantity } x {this.props.children}
        </li>
      );
  }
}

render(<GroceryList />, document.getElementById('root'));

/* Notes:
- Besides using "named" props, it's possible to reference the content between the OPENING and CLOSING tags in the parent component using "props.children"
*/

