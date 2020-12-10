import { useContext } from 'react';
import Card from "../Card";
import { AppContext } from '../../context/AppContext';

const Store = () => {
  const buyCard = (cardId) => console.log('Buy Card Coming Soon', cardId);
  const { cards, inventory } = useContext(AppContext);

  return (
    <div>
      <h2 className="title is-2">Store Inventory</h2>
      <div className="columns">
        {cards.map((card) => (
          <div key={card.id} className="column is-one-sixth">
            <button className="button" onClick={() => buyCard(card.id)}>
              <small>Buy ({inventory[card.id]} in stock)</small>
            </button>
            <Card imgUrl={card.imgUrl} content={card.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;