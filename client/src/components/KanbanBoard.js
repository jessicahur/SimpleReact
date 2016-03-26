import React, {Component} from 'react';
import List from './list';

class KanbanBoard extends Component {
  render() {
    console.log('At Board', this.props.cards);
    return (
      <div className='app'>
        <List id='todo' title='To Do' cards={
          this.props.cards.filter(card => card.status === 'todo')
          } />


      </div>
    );
  }
}

export default KanbanBoard;
