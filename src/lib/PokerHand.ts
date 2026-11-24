import Card from "./Card";

class PokerHand {
  public cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getOutcome() {
    return "Старшая карта";
  }
}

export default PokerHand;
