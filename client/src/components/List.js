import React, {Component} from 'react';
import Card from './Card';

class List extends Component {
  render() {
    console.log('AT List',this.props.cards);
    var cards = this.props.cards.map(card => {
      return <Card key={card.id}
                   title={card.title}
                   description={card.description}
                   tasks={card.tasks} />
    }); //child components can be created here and later on listed inside parent div like that on line 17
    return (
      <div className='list'>
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    ); //cards here is the array of cards tags created on line 7
  }
}

export default List;
