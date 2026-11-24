import Card from "./Card";

class PokerHand {
  public cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getOutcome() {
    let flush = true;

    for (let i = 1; i < this.cards.length; i++) {
      if (this.cards[i].suit !== this.cards[0].suit) {
        flush = false;
      }
    }

    if (flush) {
      return "Флеш";
    }

    let threes = 0;
    let pairs = 0;

    for (let i = 0; i < this.cards.length; i++) {
      let count = 0;

      for (let j = 0; j < this.cards.length; j++) {
        if (this.cards[i].rank === this.cards[j].rank) {
          count++;
        }
      }

      if (count === 3) {
        threes++;
      } else if (count === 2) {
        pairs++;
      }
    }

    if (threes > 0) {
      return "Тройка";
    } else if (pairs === 4) {
      return "Две пары";
    } else if (pairs === 2) {
      return "Одна пара";
    }

    return "Старшая карта";
  }
}

export default PokerHand;
