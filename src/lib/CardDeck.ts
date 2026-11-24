import Card from "./Card";

class CardDeck {
  public cards: Card[] = [];

  private suits: string[] = ["spades", "hearts", "diams", "clubs"];
  private ranks: string[] = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  constructor() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        const card = new Card(this.ranks[j], this.suits[i]);
        this.cards.push(card);
      }
    }
  }

  getCard() {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    const removed = this.cards.splice(randomIndex, 1);
    return removed[0];
  }

  getCards(howMany: number) {
    const result: Card[] = [];

    for (let i = 0; i < howMany; i++) {
      const card = this.getCard();
      result.push(card);
    }

    return result;
  }
}

export default CardDeck;
