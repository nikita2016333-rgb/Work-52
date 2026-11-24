import { useState } from "react";
import Card from "./Card";
import CardDeck from "./lib/CardDeck";
import type CardClass from "./lib/Card";

const App = () => {
  const [cards, setCards] = useState<CardClass[]>([]);

  const dealCards = () => {
    const deck = new CardDeck();
    const newCards = deck.getCards(5);
    setCards(newCards);
  };

  if (cards.length === 0) {
    return <button onClick={dealCards}>Раздать карты</button>;
  }

  return (
    <>
      <button onClick={dealCards}>Раздать карты</button>
      <div className="playingCards faceImages">
        <Card rank={cards[0].rank} suit={cards[0].suit} />
        <Card rank={cards[1].rank} suit={cards[1].suit} />
        <Card rank={cards[2].rank} suit={cards[2].suit} />
        <Card rank={cards[3].rank} suit={cards[3].suit} />
        <Card rank={cards[4].rank} suit={cards[4].suit} />
      </div>
    </>
  );
};

export default App;
