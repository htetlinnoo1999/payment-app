export interface CardProps {
  onPress: () => any;
  cardInfo: Card;
}

export type Card = {
  cardNumber: string;
  cardHolder: string;
  expires: string;
  cvv: string;
};
