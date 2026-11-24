interface CardProps {
  rank: string;
  suit: string;
}

const Card = (props: CardProps) => {
  const cardClasses = `card rank-${props.rank.toLowerCase()} ${props.suit}`;

  let sum = "";

  if (props.suit === "spades") {
    sum = "♠";
  } else if (props.suit === "hearts") {
    sum = "♥";
  } else if (props.suit === "diams") {
    sum = "♦";
  } else if (props.suit === "clubs") {
    sum = "♣";
  }

  return (
    <span className={cardClasses}>
      <span className="rank">{props.rank.toUpperCase()}</span>
      <span className="suit">{sum}</span>
    </span>
  );
};

export default Card;
