import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { robots } = this.props;

    return (
      <div>
        {robots.map(user => (
          <Card key={user.id} id={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    );
  }
}

export default CardList;
